import {
    Protagonist
} from '../protagonist/Protagonist';
import { Powerups } from './Powerups';
import { Way } from '../way/Way';
import { CollisionDetector } from '../protagonist/CollisionDetector';
const Obstacle = require('../way/obstacles/Obstacle');
const $ = require('jquery');
const Cookies = require('js-cookie');
import {GUI }  from '../GUI';
import { Sound } from '../Sound';

import { level1 } from './level1';
import { level2 } from './level2';
import { level3 } from './level3';
import { level4 } from './level4';
import { level5 } from './level5';

const levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
];

/**
 * Represents Level
 */
export class Level {
    /**
     * Represents Level
     * @param {number} current - number starting at 1 representing current level
     * @constructor
     */
    constructor(current) {
        this.current = current;
        this.way = null;
        this.speed = 1;
        this.collisionDetector = null;
        this.gameOver = false;
        this.diamonds = 0;
        this.lastDiamond = null;
        this.powerupActive = false;
        this.powerupActiveDuration = 0;
        this.powerUpDistance = 0;
        this.opacityHelper = -375;
        this.playSound = true;
    }

    /**
     * generates and positions meshes for the current level
     */
    prepare() {
        let current = levels[this.current - 1];
        this.way = new Way(current.way.length, current.speed, current.way.color);
        this.way.addObstacles(current.way.obstacles);
        this.collisionDetector = new CollisionDetector(this.way.obstacles);
        this.way.position();
    };

    /**
     * calls collision detector and returns true if game needs to be ended
     * @param {THREE.Object3D} protagonist
     * @returns {boolean} - true if gameover (collision with box or ring)
     */
    checkCollision(protagonist) {
        //check whether collision
        this.way.currentPosition.height = protagonist.position.y;
        let collObj = this.collisionDetector.collision(this.way.currentPosition);
        switch (collObj.type) {
            case "box":
            case "ring":
            case "cone":
                // no collsion detection, if powerup 4 is active
                if (this.powerupActive && this.powerupActiveDuration - this.powerUpDistance > 0) return false;
                this.gameOver = true;
                if (this.playSound) Sound.play('hitObstacle');
                return true;
            case "diamond":
                this.hitDiamond(collObj);
                return false;
        }
    };

    /**
     * calls animation functions of protagonist
     * @param {THREE.Object3D} protagonist
     * @param {THREE.Clock} clock
     * @param {number} speedMulti
     */
    animateProtagonist(protagonist, clock, speedMulti) {
        let position = Math.sin(clock.getElapsedTime() * 10) * 1;
        Protagonist.move(protagonist, position);
        if (this.powerupActive && this.powerupActiveDuration - this.powerUpDistance > 0) {
            let opacity = 0.3;
            if (this.opacityHelper >= 0) {
                opacity = (0.7 / 149625) * (this.opacityHelper * this.opacityHelper) + 0.3;
            }
            this.opacityHelper += speedMulti;
            Protagonist.makeGroupTransparent(protagonist, opacity);
            this.powerUpDistance += speedMulti;
        }
    };

    /**
     * starts level
     * @param {function} cb - callback function
     * @param {THREE.Object3D} protagonist - group of meshes of protagonist
     */
    begin(protagonist) {
        let self = this;
        //reset diamonds
        self.lastDiamond = null;
        self.diamonds = 0;
        //reset way
        let t = self.way.length - 80;
        let speedMulti = 2;
        let clock = new THREE.Clock(true);
        return new Promise((resolve, reject) => {
            let animate = function() {
                t -= speedMulti;
                self.animateProtagonist(protagonist, clock, speedMulti);
                self.way.moveForwardTillEnd(self.speed * speedMulti);
                if (t <= 0 || self.checkCollision(protagonist)) {
                    resolve();
                    return;
                }
                setTimeout(function() {
                    animate();
                }, self.speed);
            };
            animate(); //once
        });
    };

    /**
     * increases score on diamond hit and removes it
     * @param {Obstacle} collObj - diamond whitch which the collision happened
     */
    hitDiamond(collObj) {
        let self = this;
        if (!self.lastDiamond || collObj.mesh.id != self.lastDiamond.mesh.id) {
            if (self.playSound) Sound.play('hitDiamond');
            self.lastDiamond = collObj;
            self.diamonds++;
            self.lastDiamond.mesh.visible = false;
            GUI.setDiamondsInScoreBoard(self.diamonds);
        }
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    showSuccessScreen() {
        let last = '';
        let canNotBePlayed, disableNextLevel, showOutro;
        if (this.current === levels.length) {
            last = "gone";
            showOutro = "true";
        }
        if (!Level.canBePlayed(this.current + 1)) {
            canNotBePlayed = "true";
            disableNextLevel = "disabled";
        }
        GUI.showSuccessScreen({
            score: this.diamonds,
            level: this.current,
            next: this.current + 1,
            last: last,
            canNotBePlayed: canNotBePlayed,
            disableNextLevel: disableNextLevel,
            showOutro: showOutro
        });
        this.showShopScreen();
    };

    /**
     * renders hogan template gameover.mustache and adds it to html-body
     */
    showGameOverScreen() {
        GUI.showGameOverScreen({
            score: this.diamonds,
            level: this.current
        });
    };

    /**
     * adds shop screen
     */
    showShopScreen() {
        let self = this;
        let powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        GUI.showShopScreen({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
    };

    /**
     * updates shop screen
     */
    updateShopScreen() {
        let self = this;
        let powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        GUI.updateShopScreen({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
    };

    /**
     * stores the score and success in cookie
     * @param {boolean} success - whether current level has been ended with success
     */
    setCookie(success) {
        if (Cookies.get(this.current + '-success') !== "true") Cookies.set(this.current + '-success', success);
        let obj = Cookies.get();
        if (isNaN(Cookies.get('total'))) {
            Cookies.set('total', this.diamonds);
        } else {
            let sum = parseInt(Cookies.get('total'));
            sum += this.diamonds;
            Cookies.set('total', sum);
        }
    };

    /**
     * returns background color for level
     * @returns {number} color as hexdecimal
     */
    background() {
        let current = levels[this.current - 1];
        return current.background;
    };

    /**
     * returns total amount of diamonds
     * @returns {number}
     */
    static getTotalDiamonds() {
        return Cookies.get('total');
    };

    /**
     * checks whether the level can be played
     * @param {number} level - that should be played
     * @returns {boolean}
     */
    static canBePlayed(level) {
        if (level == 1) return true;
        level--;
        if (Cookies.get(level + '-success') == "true") {
            //managed level
            if (level <= Powerups.amount()) {
                //powerup exists
                if (level <= Powerups.amountOfBought()) return true;
                return false;
            } else {
                //no powerup exist
                return true;
            }
        }
        return false;
    };
}
