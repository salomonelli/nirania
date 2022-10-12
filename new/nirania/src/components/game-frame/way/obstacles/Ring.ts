import * as THREE from 'three';
const radius = 100;

export default class Ring {
    material: any;
    geometry: any;
    mesh: any;
    /**
     * Represents the obstacle "Ring"
     * @param {Object} ring - structure as in levelX.js
     * @constructor
     */
    constructor(ring: any) {
        this.material = new THREE.MeshLambertMaterial({
            color: ring.color
        });
        this.geometry = new THREE.TorusGeometry(radius, 3, 16, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }

    /**
     * Positions the Ring on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    position(angle: number, distance: number, length: number, radius: number) {
        this.mesh.rotation.x += Math.PI / 2;
        this.mesh.position.y = (length / 2) - distance;
    };

    /**
     * converts ring object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    static prepareForCollisionDetection(obstacle: any, r: any) {
        return {
            type: 'ring',
            size: {
                height: radius - 80
            },
            angle: {
                center: 0,
                min: 0,
                max: 360
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - 2,
                max: obstacle.position.distance + 2
            },
        };
    };
}
