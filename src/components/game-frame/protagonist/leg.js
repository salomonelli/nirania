import * as Color from '../color';
const THREE = require('three');

/**
 * leg of protagonist
 */
export default class Leg {
    constructor() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(Leg.geometry, this.material);
    }

    /**
     * positions the leg according to given coordinates
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    position(x, y, z) {
        this.mesh.position.set(x, y, z);
    };

    /**
     * adds the leg to a group
     * @param {THREE.Group} group
     */
    addToGroup(group) {
        group.add(this.mesh);
    };

    /**
     * loads the leg from json file (blender)
     * @param {Promise} promise
     */
    static init() {
        let loader = new THREE.JSONLoader();
        return new Promise((resolve, reject) => {
            loader.load('/blender/leg.json', function(geometry, materials) {
                Leg.geometry = geometry;
                resolve();
            });
        });
    };
}
