import * as Erich from './erich/erich';
import {
    Particles
} from './Particles';
import Color from './color';
import * as Util from './util';

import * as THREE from 'three';
import * as TWEEN from 'tween.js';

/**
 * Represents Scene
 */
class Scene extends THREE.Scene {

    /**
     * Represents Scene
     * @param {number} width - width of browser window
     * @param {number} height - height of browser window
     * @constructor
     */
    constructor(width, height, level) {
        super();
        this.background = new THREE.Color(level.currentLevel.background);

        this.level = level;
        this.width = width;
        this.height = height;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = false;

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
        this.particles = new Particles(-600, 600, -600, 600, -300, 0, 100);
        this.move = {
            left: false,
            right: false,
            up: false,
            continue: false,
            boost: false
        };
        this.addLights();
    }

    /**
     * renders the scene to a given dom-element
     */
    renderToDomElement(domEl) {
        domEl.appendChild(this.renderer.domElement);
    }

    /**
     * adds lights to scene
     */
    addLights() {
        const hemisphere = new THREE.HemisphereLight(0xd3edec, Color.way, 0.8);
        this.add(hemisphere);

        const shadow = new THREE.DirectionalLight(0xffffff, 0.005);
        shadow.position.set(0, 200, 0);
        shadow.position.copy(this.camera.position);
        shadow.position.y += 1000;
        shadow.target.position.set(0, 0, 0);
        shadow.castShadow = true;
        //visible area of the projected shadow
        shadow.shadow.camera.left = -1000;
        shadow.shadow.camera.right = 1000;
        shadow.shadow.camera.top = 1000;
        shadow.shadow.camera.bottom = -1000;
        shadow.shadow.camera.near = 1;
        shadow.shadow.camera.far = 2000;
        //resolution
        shadow.shadow.mapSize.width = 2048;
        shadow.shadow.mapSize.height = 2048;
        this.add(shadow);
        this.add(new THREE.AmbientLight(0xffffff, 0.3));
    };

    /**
     * Renders scene and with basic animations like particles
     */
    render() {
        this.particles.animate();
        this.renderer.render(this, this.camera);
    };


    /**
     * adds current level objects to scene
     * @param {Level} level - current level
     */
    addLevel(level) {
        this.way = level.way;
        this.way.addToScene(this);
    };

    /**
     * turns camera and protagonist until told to stop
     */
    turn() {
        if (this.move.continue) {
            if (this.move.left) {
                this.way.rotate(-Math.PI * 0.01);
                this.particles.rotate(-Math.PI * 0.01);
            }
            if (this.move.right) {
                this.way.rotate(Math.PI * 0.01);
                this.particles.rotate(Math.PI * 0.01);
            }
            if (this.move.up) this.level.erich.jump();
        }
    };

    /**
     * returns the THREE group of the protagonist
     * @returns {THREE.Object3D} group of protagonist
     */
    getErich() {
        return this.level.erich.group;
    };

    /**
     * sets camera to the right position
     */
    simpleIntro() {
        this.camera.position.set(0, 50, 95);
        this.particles.position(0, 0, -500);
        this.particles.addToScene(this);
        this.level.erich.position(0, 5, 0);
        this.level.erich.rotate('y', Math.PI);
        this.level.erich.addToScene(this);
        this.camera.lookAt(this.level.erich.currentPosition);
    };


    setupLevel(level) {
        this.simpleIntro();
        this.addLevel(level);
        this.move.continue = true;
        this.startUntilEnd();
    }

    /**
     * disables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    stopMovingErich(direction) {
        this.move[direction] = false;
    };

    /**
     * enables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    startMovingErich(direction) {
        this.move[direction] = true;
    };

    async startUntilEnd() {
        while (this.move.continue) {
            await Util.requestAnimationFramePromise();
            this.render();
            this.turn(this.level);
            TWEEN.update();
        }
    }
}


/**
 * [create description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @param  {Level} level  [description]
 * @return {[type]}        [description]
 */
export function create(width, height, level) {
    return new Scene(width, height, level);
};
