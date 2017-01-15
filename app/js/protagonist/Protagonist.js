import {
    Body
} from './Body';
import {
    Head
} from './Head';
import {
    Leg
} from './Leg';
const THREE = require('three');
const TWEEN = require('tween.js');
const Cookies = require('js-cookie');

export class Protagonist {
    constructor() {
        this.object3D = new THREE.Object3D();
        this.body = new Body();
        this.head = new Head();
        this.left = {
            leg: new Leg()
        };
        this.right = {
            leg: new Leg()
        };
        this.groupBodyParts();
        this.scaleBodyParts();
        this.isJumping = false;
    }

    /**
     * scales body parts to proper setSize
     */
    scaleBodyParts(){
      this.object3D.scale.x = this.object3D.scale.y = this.object3D.scale.z = 10;
    }

    /**
     * groups the body parts of protagonist and positions them
     */
    groupBodyParts() {
        this.body.position(0, 0, 0);
        this.body.addToGroup(this.object3D);
        this.head.position(0, 0.1, 0);
        this.head.addToGroup(this.object3D);
        this.right.leg.position(0.5, 0, 0);
        this.right.leg.addToGroup(this.object3D);
        this.left.leg.position(0, 0, 0);
        this.left.leg.addToGroup(this.object3D);
    }

    /**
     * Makes protagonist jump a given height
     */
    jump() {
        let height = 40;
        if (Cookies.get('powerup-2') == "bought") height = 70;
        let self = this;
        if (!self.isJumping) {
            self.isJumping = true;
            let tween = new TWEEN
                .Tween({
                    jump: 0
                })
                .to({
                    jump: Math.PI
                }, 700)
                .onUpdate(function() {
                    self.group.position.y = 70 * Math.sin(this.jump);
                })
                .start();
            tween.onComplete(function() {
                self.isJumping = false;
            });
        }

    }

    /**
     * positions protagonist according to given coordinates
     * @param {number} x - x position of particles group
     * @param {number} y - y position of particles group
     * @param {number} z - z position of particles group
     */
    position(x, y, z) {
        this.object3D.position.set(x, y, z);
    }

    /**
     * rotates the protagonist according to axis and angle
     * @param {string} axis - "x", "y" or "z"
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
        }
    }

    /**
     * adds protagonist to given scene
     * @param {THREE.Scene} scene - scene to which the protagonist will be added
     */
    addToScene(scene) {
        scene.add(this.object3D);
    }

    /**
     * returns the current position of the Protagonist
     * @returns {Object}
     */
    get currentPosition() {
        return this.object3D.position;
    }

    /**
     * decreases the position of the protagonist according to given axis
     * @param {string} axis - "x", "y" or "z"
     */
    decreasePosition(axis) {
        switch (axis) {
            case "x":
                this.object3D.position.x--;
                break;
            case "y":
                this.object3D.position.y--;
                break;
            case "z":
                this.object3D.position.z--;
                break;
        }
    }

    /**
     * returns the group of meshes of the protagonist
     * @returns {THREE.Object3D}
     */
    get group() {
        return this.object3D;
    }

    /**
     * changes opacity of protagonist
     * @param {THREE.Object3D} group - contains meshes of protagonist
     * @param {number} opacity - from 0 to 1
     */
    static makeGroupTransparent(group, opacity) {
        group.children.forEach(function(parts) {
            parts.material.transparent = true;
            parts.material.opacity = opacity;
        });
    }

    /**
     * moves group of protagonist
     * @param {THREE.Object3D} group - contains meshes of protagonist
     *
     */
    static move(group, position) {
        group.children[0].position.x = position * -0.05;
        group.children[3].position.z = position * 1;
        group.children[2].position.z = position * -1;
    }

    /**
     * loads blender files for protagonist
     * @param {Promise} promise
     */
    static init() {
        return Promise.all([
            Leg.init(),
            Head.init(),
            Body.init()
        ]);
    };
}
