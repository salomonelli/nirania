import * as THREE from 'three';
import * as Util from '../../util';
const size = 10;
const heightFromWay = 20;

export default class Diamond {
    /**
     * Represents the 'obstacle' 'diamond' (that can be collected)
     * @param {Object} diamond - structure as in levelX.js
     * @constructor
     */
    constructor(diamond) {
        this.geometry = new THREE.OctahedronGeometry(size, 0);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.6
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.castShadow = true;
    }

    /**
     * Positions the diamond on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    position(angle, distance, length, radius) {
        angle = -(angle - 90);
        angle = Util.convertDegreesToRadians(angle);
        radius += heightFromWay;
        let y = (length / 2) - distance;
        let x = radius * Math.cos(angle);
        let z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x, y, z);
    };

    /**
     * converts diamond object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    static prepareForCollisionDetection(obstacle, radius) {
        let angle = 10;
        return {
            type: 'diamond',
            size: {
                height: heightFromWay
            },
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - angle,
                max: obstacle.position.angle + angle
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - 10,
                max: obstacle.position.distance + 10
            }

        };
    };

}
