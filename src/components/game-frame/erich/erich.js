import * as THREE from 'three';
import * as TWEEN from 'tween.js';
import {
    BehaviorSubject
} from 'rxjs/Rx';

import * as Part from './part';

const CLOCK = new THREE.Clock(true);

class Erich {
    constructor() {
        this.object3D = new THREE.Object3D();
        this.object3D.scale.x = this.object3D.scale.y = this.object3D.scale.z = 20;


        //this.body = Part.getByType('body');
        this.head = Part.getByType('head');
        /*
        this.left = {
        leg: Part.getByType('leg')
      };
      this.right = {
      leg: Part.getByType('leg')
    };
         */
        this.groupBodyParts();
        this.isJumping = false;
    }

    /**
     * groups the body parts of erich and positions them
     */
    groupBodyParts() {
        /*
        this.body.position(0, 0, 0);
        this.body.addToGroup(this.object3D);
        this.right.leg.position(0.5, 0, 0);
        this.right.leg.addToGroup(this.object3D);
        this.left.leg.position(0, 0, 0);
        this.left.leg.addToGroup(this.object3D);
         */
        this.head.position(0, -2, 0);
        this.head.addToGroup(this.object3D);
    }

    /**
     * moves erich to position (body and legs)
     * @param {THREE.Object3D} erich
     * @param {THREE.clock} clock
     */
    animateMovement() {

        /*
        const position = Math.sin(CLOCK.getElapsedTime() * 10) * 1;
        this.object3D.children[0].position.x = position * -0.05;
        this.object3D.children[3].position.z = position * 1;
        this.object3D.children[2].position.z = position * -1;
        */
    };

    /**
     * Makes erich jump a given height
     */
    jump() {
        const height$ = new BehaviorSubject(this.object3D.position.y);
        const jumpHeight = 70;
        if (this.isJumping) return;
        this.isJumping = true;
        const ret = {};
        const self = this;
        let tween = new TWEEN
            .Tween({
                jump: 0
            })
            .to({
                jump: Math.PI
            }, 700)
            .onUpdate(function() {
                const height = jumpHeight * Math.sin(this.jump);
                self.object3D.position.y = height;
                height$.next(height);
            })
            .start();
        tween.onComplete(() => {
            this.isJumping = false;
            height$.complete();
        });
        return height$;
    }

    /**
     * positions erich according to given coordinates
     * @param {number} x - x position of particles group
     * @param {number} y - y position of particles group
     * @param {number} z - z position of particles group
     */
    position(x, y, z) {
        this.object3D.position.set(x, y, z);
    }

    /**
     * rotates the erich according to axis and angle
     * @param {string} axis - 'x', 'y' or 'z'
     * @param {number} angle - in radians
     */
    rotate(axis, angle) {
        switch (axis) {
            case 'x':
                this.object3D.rotateX(angle);
                break;
            case 'y':
                this.object3D.rotateY(angle);
                break;
            case 'z':
                this.object3D.rotateZ(angle);
                break;
            default:
                throw new Error('angle not possible');
        }
    }

    /**
     * adds erich to given scene
     * @param {THREE.Scene} scene - scene to which the erich will be added
     */
    addToScene(scene) {
        scene.add(this.object3D);
    }

    /**
     * returns the current position of the Erich
     * @returns {Object}
     */
    get currentPosition() {
        return this.object3D.position;
    }

    /**
     * decreases the position of the erich according to given axis
     * @param {string} axis - 'x', 'y' or 'z'
     */
    decreasePosition(axis) {
        switch (axis) {
            case 'x':
                this.object3D.position.x--;
                break;
            case 'y':
                this.object3D.position.y--;
                break;
            case 'z':
                this.object3D.position.z--;
                break;
            default:
                throw new Error('axis unknown');
        }
    }
}

export function create() {
    return new Erich();
}
