import {
    Protagonist
} from '../protagonist/Protagonist';
import {
    Way
} from '../way/Way';
import {
    CollisionDetector
} from '../protagonist/CollisionDetector';
const Obstacle = require('../way/obstacles/Obstacle');
const $ = require('jquery');
const Cookies = require('js-cookie');
import {
    GUI
} from '../GUI';
import {
    Sound
} from '../Sound';

import {
    level1
} from './level1';
import {
    level2
} from './level2';
import {
    level3
} from './level3';
import {
    level4
} from './level4';
import {
    level5
} from './level5';

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
        this.opacityHelper = -375;
        this.playSound = true;
        this.instruction = '';
        this.requiredDiamonds = 0;
    }

    /**
     * generates and positions meshes for the current level
     */
    prepare() {
        let current = levels[this.current - 1];
        this.initInstruction(current.instruction);
        this.initRequiredDiamonds(current.requiredDiamonds);
        this.initWay(current.way.length, current.speed, current.way.color, current.way.obstacles);
        this.initCollisionDetector();
    };

    /**
     * creates way
     * @param {number} length length of way
     * @param {number} speed speed with which the protagonist moves
     * @param {String} color color of way
     * @param {Object[]} obstacles obstacles on way<
     */
    initWay(length, speed, color, obstacles){
      this.way = new Way(length, speed, color);
      this.way.addObstacles(obstacles);
      this.way.position();
    };

    /**
     * initiates collision detection
     */
    initCollisionDetector(){
      this.collisionDetector = new CollisionDetector(this.way.obstacles);
    };

    /**
     * sets instruction if not null
     * @param {String} instruction explanation for the level that is displayed to the user
     */
    initInstruction(instruction){
      if (instruction) this.instruction = instruction;
    };

    /**
     * sets requiredDiamonds if not null
     * @param {String} requiredDiamonds amaount of diamonds that is needed to get to the next level
     */
    initRequiredDiamonds(diamonds){
      if (diamonds) this.requiredDiamonds = diamonds;
    };

    /**
     * calls collision detector and returns true if game needs to be ended
     * @param {THREE.Object3D} protagonist
     * @returns {boolean} - true if gameover (collision with box or ring)
     */
    checkCollision(protagonist) {
      let currentPosition = this.getCurrentPosition(protagonist);
      let collObj = this.getCollisionObject(currentPosition);
      switch (collObj.type) {
          case "box":
          case "ring":
          case "cone":
              this.hitObstacle();
              return true;
          case "diamond":
              this.hitDiamond(collObj);
              return false;
          default:
              return false;
      }
    };

    /**
     * is called when obstacle (except diamond) was hit
     */
    hitObstacle(){
      this.gameOver = true;
      this.sound('hitObstacle');
    };

    /**
     * plays sound
     * @param {String} sound
     */
    sound(sound){
      if(!this.playSound) return;
      switch (sound) {
        case 'hitObstacle':
          Sound.play('hitObstacle');
          break;
      }
    };

    /**
     * gets current position of protagonist
     * @param {Protagonist} protagonist
     * @return {Way.currentPosition}
     */
    getCurrentPosition(protagonist){
      this.way.currentPosition.height = protagonist.position.y;
      return this.way.currentPosition;
    };

    /**
     * gets collision object
     * @return {Object}
     */
    getCollisionObject(currentPosition){
      return this.collisionDetector.collision(currentPosition);
    }


    /**
     * calls animation functions of protagonist
     * @param {THREE.Object3D} protagonist
     * @param {THREE.Clock} clock
     * @param {number} speedMulti
     */
    animateProtagonist(protagonist, clock, speedMulti) {
        this.moveProtagonist(protagonist, clock);
    };

    /**
     * sets transparency of protagonist
     * @param {THREE.Object3D} protagonist
     * @param {number} opacity
     */
    makeProtagonistTransparent(protagonist, opacity){
      Protagonist.makeGroupTransparent(protagonist, opacity);
    }

    /**
     * moves protagonist to position (body and legs)
     * @param {THREE.Object3D} protagonist
     * @param {THREE.clock} clock
     */
    moveProtagonist(protagonist, clock){
      let position = Math.sin(clock.getElapsedTime() * 10) * 1;
      Protagonist.move(protagonist, position);
    };

    /**
     * starts level
     * @param {function} cb - callback function
     * @param {THREE.Object3D} protagonist - group of meshes of protagonist
     */
    begin(protagonist) {
        let self = this;
        if(this.instruction) GUI.showInstruction(this.instruction);
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
                    Cookies.set('diamonds-' + self.current, self.diamonds);
                    GUI.hideInstruction();
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
        if (
          Cookies.get(level + '-success') == "true" &&
          Cookies.get('diamonds-'+level) >= levels[level-1].requiredDiamonds
        ) {
            return true;
        }
        return false;
    };
}
