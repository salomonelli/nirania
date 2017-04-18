import * as Protagonist from './protagonist/protagonist';
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
class Scene {

    /**
     * Represents Scene
     * @param {number} width - width of browser window
     * @param {number} height - height of browser window
     * @constructor
     */
    constructor(width, height, level) {
        this.width = width;
        this.height = height;
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
        this.scene = new THREE.Scene();
        this.level = level;
        this.scene.background = new THREE.Color(level.currentLevel.background);
        // this.powerupUsed = false;
        // this.boostNotUsed = true;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        this.enableShadowMap(false);
        this.objects = {
            particles: new Particles(-600, 600, -600, 600, -300, 0, 100),
            introParticles: new Particles(20, -300, 100, 1300, -500, 0, 30),
            protagonist: Protagonist.get()
        };
        this.lights = {
            hemisphere: null,
            shadow: null
        };
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
     * enables shadow map of renderer
     * @param {?boolean} to
     */
    enableShadowMap(to = true) {
        this.renderer.shadowMap.enabled = false;
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
        this.lights.hemisphere = new THREE.HemisphereLight(0xd3edec, Color.way, 0.8);
        this.lights.shadow = new THREE.DirectionalLight(0xffffff, 0.005);
        this.lights.shadow.position.set(0, 200, 0);
        this.lights.shadow.position.copy(this.camera.position);
        this.lights.shadow.position.y += 1000;
        this.lights.shadow.target.position.set(0, 0, 0);
        this.lights.shadow.castShadow = true;
        //visible area of the projected shadow
        this.lights.shadow.shadow.camera.left = -1000;
        this.lights.shadow.shadow.camera.right = 1000;
        this.lights.shadow.shadow.camera.top = 1000;
        this.lights.shadow.shadow.camera.bottom = -1000;
        this.lights.shadow.shadow.camera.near = 1;
        this.lights.shadow.shadow.camera.far = 2000;
        //resolution
        this.lights.shadow.shadow.mapSize.width = 2048;
        this.lights.shadow.shadow.mapSize.height = 2048;
        //this.lights.shadow.shadowDarkness = 0.1;
        this.scene.add(this.lights.hemisphere);
        this.scene.add(this.lights.shadow);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    };

    /**
     * Renders scene and with basic animations like particles
     */
    render() {
        this.objects.particles.animate();
        this.renderer.render(this.scene, this.camera);
    };

    /**
     * starting animation  part 1
     * @param {{position: number, clock: THREE.Clock}} obj contains current position and clock
     */
    startingAnimation1(obj) {
        let t = 150;
        return new Promise((resolve, reject) => {
            const fall = () => {
                this.objects.protagonist.decreasePosition('y');
                t--;
                obj.position = Math.sin(obj.clock.getElapsedTime() * 10) * 1;
                this.objects.protagonist.body.position.x = obj.position * -5;
                if (t > 0) {
                    setTimeout(function() {
                        fall();
                    }, 1);
                } else resolve(obj);
            };
            fall();
        });
    }

    /**
     * starting animation part 2
     * @param {{position: number, clock: THREE.Clock}} obj contains current position and clock
     */
    startingAnimation2(obj) {
        let t = 800;
        return new Promise((resolve, reject) => {
            const fall = () => {
                this.objects.protagonist.decreasePosition('y');
                this.camera.position.y--;
                obj.position = Math.sin(obj.clock.getElapsedTime() * 10) * 1;
                this.objects.protagonist.body.position.x = obj.position * -5;
                t--;
                if (t > 0) {
                    setTimeout(function() {
                        fall();
                    }, 1);
                } else resolve(obj);
            };
            fall();
        });
    }

    /**
     * starting animation part 3
     * @param {{position: number, clock: THREE.Clock}} obj contains current position and clock
     */
    startingAnimation3(obj) {
        let t = 150;
        return new Promise((resolve, reject) => {
            const fall = () => {
                this.camera.position.y--;
                t--;
                obj.position = Math.sin(obj.clock.getElapsedTime() * 10) * 1;
                this.objects.protagonist.body.position.x = obj.position * -5;
                if (t > 0) {
                    setTimeout(function() {
                        fall();
                    }, 1);
                } else {
                    this.camera.lookAt(this.objects.protagonist.currentPosition);
                    resolve(obj);
                }
            };
            fall();
        });
    }

    /**
     * starting animation part 4
     * @param {{position: number, clock: THREE.Clock}} obj contains current position and clock
     */
    startingAnimation4(obj) {
        let t = 250;
        return new Promise((resolve, reject) => {
            const fall = () => {
                this.camera.position.x--;
                this.camera.position.z += 0.5;
                obj.position = Math.sin(obj.clock.getElapsedTime() * 10) * 1;
                this.objects.protagonist.body.position.x = obj.position * -5;
                this.camera.lookAt(this.objects.protagonist.currentPosition);
                t--;
                if (t > 0) {
                    setTimeout(function() {
                        fall();
                    }, 1);
                } else {
                    this.camera.lookAt(this.objects.protagonist.currentPosition);
                    resolve(obj);
                }
            };
            fall();
        });
    }

    /**
     * starting animation part 5
     * @param {{position: number, clock: THREE.Clock}} obj contains current position and clock
     */
    startingAnimation5(obj) {
        let t = 80;
        return new Promise((resolve, reject) => {
            const zoom = () => {
                this.camera.position.z--;
                this.camera.lookAt(this.objects.protagonist.currentPosition);
                obj.position = Math.sin(obj.clock.getElapsedTime() * 10) * 1;
                this.objects.protagonist.body.position.x = obj.position * -5;
                t--;
                if (t > 0) {
                    setTimeout(function() {
                        zoom();
                    }, 1);
                } else {
                    this.camera.lookAt(this.objects.protagonist.currentPosition);
                    resolve(obj);
                }
            };
            zoom();
        });
    }

    /**
     * creates the animation for starting the game
     * @param {Promise}
     */
    async startingAnimation() {
        let obj = {
            position: null,
            clock: new THREE.Clock(true)
        };
        obj = await this.startingAnimation1(obj);
        obj = await this.startingAnimation2(obj);
        obj = await this.startingAnimation3(obj);
        obj = await this.startingAnimation4(obj);
        obj = await this.startingAnimation5(obj);
        this.objects.introParticles.removeFromScene(this.scene);
        return obj;
    };

    /**
     * adds current level objects to scene
     * @param {Level} level - current level
     */
    addLevel(level) {
        this.objects.way = level.way;
        this.objects.way.addToScene(this.scene);
    };

    /**
     * turns camera and protagonist until told to stop
     */
    turn() {
        if (this.move.continue) {
            if (this.move.left) {
                this.objects.way.rotate(-Math.PI * 0.01);
                this.objects.particles.rotate(-Math.PI * 0.01);
            }
            if (this.move.right) {
                this.objects.way.rotate(Math.PI * 0.01);
                this.objects.particles.rotate(Math.PI * 0.01);
            }
            if (this.move.up) this.objects.protagonist.jump();
        }
    };

    /**
     * returns the THREE group of the protagonist
     * @returns {THREE.Object3D} group of protagonist
     */
    getProtagonist() {
        return this.objects.protagonist.group;
    };

    /**
     * sets camera to the right position
     */
    simpleIntro() {
        this.camera.position.set(0, 50, 95);
        this.objects.particles.position(0, 0, -500);
        this.objects.particles.addToScene(this.scene);
        this.objects.protagonist.position(0, 5, 0);
        this.objects.protagonist.rotate('y', Math.PI);
        this.objects.protagonist.addToScene(this.scene);
        this.camera.lookAt(this.objects.protagonist.currentPosition);
    };

    /**
     * disables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    stopMovingProtagonist(direction) {
        this.move[direction] = false;
    };

    /**
     * enables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    startMovingProtagonist(direction) {
        this.move[direction] = true;
    };

    async startUtilEnd() {
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
}
