import * as Color from '../color';
const THREE = require('three');

/**
 * body of protagonist
 */
export default class Body {

    /**
     * generates mesh for body
     */
    constructor() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(Body.geometry, this.material);
    }

    /**
     * positions the body according to given coordinates
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    position(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    /**
     * adds the body to a group
     * @param {THREE.Group} group
     */
    addToGroup(group) {
        group.add(this.mesh);
    }

    /**
     * loads the body from json file (blender)
     * @param {Promise} promise
     */
    static init(cb) {
        let loader = new THREE.JSONLoader();
        return new Promise((resolve, reject) => {
            loader.load('/blender/body.json', function(geometry, materials) {
                Body.geometry = geometry;
                resolve();
            });
        });
    }

}
