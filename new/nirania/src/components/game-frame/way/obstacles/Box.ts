import * as THREE from 'three';
import * as Util from '../../util';

export default class Box {
    material: any;
    geometry: any;
    mesh: any;

    /**
     * Represents the obstacle "Box"
     * @param {Object} box - structure as in levelX.js
     * @constructor
     */
    constructor(box: any) {
        this.material = new THREE.MeshLambertMaterial({
            color: box.color
        });
        this.geometry = new THREE.BoxGeometry(box.size.height, box.size.length, box.size.width);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }

    /**
     * Positions the box on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    position(angle: number, distance: number, length: number, radius: number) {
        angle = -(angle - 90);
        angle = Util.convertDegreesToRadians(angle);
        let y = (length / 2) - distance;
        let x = radius * Math.cos(angle);
        let z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x, y, z);
    };

    /**
     * converts box object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} - object ret that is fitted for detecting collisions
     */
    static prepareForCollisionDetection(obstacle: any, radius: number) {
        let b = obstacle.size.width * 0.5;
        let angleRight = Math.atan(b / radius);
        return {
            type: 'box',
            size: obstacle.size,
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - Util.convertRadiansToDegrees(angleRight),
                max: obstacle.position.angle + Util.convertRadiansToDegrees(angleRight)
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - (0.5 * obstacle.size.length),
                max: obstacle.position.distance + (0.5 * obstacle.size.length)
            }
        };
    };
}
