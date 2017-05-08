import { Color } from '../Color';
const THREE = require('three');

/**
 * head of protagonist
 */
export class Head {
    /**
     * generates mesh for head of Protagonist
     */
    constructor() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(Head.geometry, this.material);
    }

    /**
     * positions the head according to given coordinates
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    position(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    /**
     * adds the head to a group
     * @param {THREE.Group} group
     */
    addToGroup(group) {
        group.add(this.mesh);
    }

    /**
     * loads the head from json file (blender)
     * @param {Promise} promise
     */
    static init() {
        let loader = new THREE.JSONLoader();
        return new Promise((resolve, reject)=>{
          loader.load('/blender/head.json', function(geometry, materials) {
              Head.geometry = geometry;
              resolve();
          });
        });
    }
}
