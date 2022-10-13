import Color from './color';

import * as THREE from 'three';
import { Particles } from './Particles';
import { Level } from './level/level';
import { Way } from './way/way';

/**
 * Represents Scene
 */
class Scene extends THREE.Scene {
    public way: Way;

    /**
     * Represents Scene
     * @param {number} width - width of browser window
     * @param {number} height - height of browser window
     * @constructor
     */
    constructor(
        public width: number,
        public height: number,
        public level: Level
    ) {
        super();
        this.background = new THREE.Color(level.currentLevel.background);
        this.way = level.way;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = false;

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
        this.particles = new Particles(-600, 600, -600, 600, this.way.length * (-1), 0, 100);
        this.move = {
            left: false,
            right: false,
            up: false,
            continue: false,
            boost: false
        };
        this.addLights();
        this.add(this.way.group);

        this.camera.position.set(0, 50, 95);
        this.particles.position(0, 0, -500);
        this.particles.addToScene(this);
        this.level.erich.position(0, 5, 0);
        this.level.erich.rotate('y', Math.PI);
        this.level.erich.addToScene(this);
        this.camera.lookAt(this.level.erich.currentPosition);
    }

    /**
     * renders the scene to a given dom-element
     */
    renderToDomElement(domEl: any) {
        domEl.appendChild(this.renderer.domElement);
    }

    /**
     * adds lights to scene
     */
    addLights() {
        const hemisphere = new THREE.HemisphereLight(0xd3edec, (Color as any).way, 0.8);
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
     * turns camera and protagonist until told to stop
     */
    animateMovement() {
        const angle = 0.003;
        if (this.move.continue) {
            if (this.move.left) {
                /*
                this.camera.position.x = this.camera.position.x + 1;
                this.camera.lookAt(this.level.erich.currentPosition);

                // TODO move camera and erich
                 */
                this.way.rotate(-Math.PI * angle);
                this.particles.rotate(-Math.PI * angle);
            }
            if (this.move.right) {
                // TODO move camera and erich
                this.way.rotate(Math.PI * angle);
                this.particles.rotate(Math.PI * angle);
            }
            if (this.move.up) {
                const height$ = this.level.erich.jump();
                if (height$) {
                    const sub = height$.subscribe(
                        (h: any) => this.way.currentPosition.height = h,
                        (err: any) => { },
                        () => {
                            if (!!this.move.once) this.move.up = false;
                            sub.unsubscribe();
                        }
                    );
                }
            }
        }
    };

    startAction(action: any, once: any) {
        this.move[action] = true;
        this.move.once = once;
    }

    endAction(action: any) {
        this.move[action] = false;
    }

    hideFromScene(mesh: any) {
        mesh.material.opacity = 0;
    }
    moveCameraForward(speed: number) {
        this.camera.position.z = this.camera.position.z + speed;
    }


    /**
     * returns the THREE group of the protagonist
     * @returns {THREE.Object3D} group of protagonist
     */
    getErich() {
        return this.level.erich.group;
    };


    /**
     * disables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    stopMovingErich(direction: any) {
        this.move[direction] = false;
    };

    /**
     * enables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - 'left' or 'right'
     */
    startMovingErich(direction: any) {
        this.move[direction] = true;
    };
}


/**
 * [create description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @param  {Level} level  [description]
 * @return {[type]}        [description]
 */
export function create(width: number, height: number, level: any) {
    return new Scene(width, height, level);
};
