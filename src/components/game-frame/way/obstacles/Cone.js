import THREE from 'three';
import * as Util from '../../util';
const height = 30;
const radius = 15;

export default class Cone {
    /**
     * Represenst cone that moves randomly around the way
     */
    constructor(cone) {
        this.material = new THREE.MeshLambertMaterial({
            color: cone.color
        });
        this.geometry = new THREE.ConeGeometry(radius, height, 100, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }

    /**
     * positions cone on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    position(angle, distance, length, radius) {
        radius += height * 0.5;
        this.mesh.rotation.z -= Math.PI / 2;
        angle = -(angle - 90);
        angle = Util.convertDegreesToRadians(angle);
        let y = (length / 2) - distance;
        let x = radius * Math.cos(angle);
        let z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x, y, z);
    };

    static prepareForCollisionDetection(obstacle, radius) {
        let a = radius - 0.5 * height;
        let b = height * 0.5;
        let angleRight = Math.atan(b / a);
        return {
            type: 'cone',
            size: {
                width: height,
                length: height,
                height: height
            },
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - Util.convertRadiansToDegrees(angleRight),
                max: obstacle.position.angle + Util.convertRadiansToDegrees(angleRight)
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - (0.5 * height),
                max: obstacle.position.distance + (0.5 * height)
            }
        };
    };
}
