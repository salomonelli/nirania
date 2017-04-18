import * as THREE from 'three';

const loader = new THREE.JSONLoader();
const jsonData = {
    'head': loader.parse(require('../blender/head.json')),
    'body': loader.parse(require('../blender/body.json')),
    'leg': loader.parse(require('../blender/leg.json'))
};

class Part {
    constructor(type, geometry) {
        this.type = type;
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(geometry, this.material);
    }

    /**
     * positions the part according to given coordinates
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    position(x, y, z) {
        this.mesh.position.set(x, y, z);
    };

    /**
     * adds the part to a group
     * @param {THREE.Group} group
     */
    addToGroup(group) {
        group.add(this.mesh);
    };
}

export function getByType(type) {
    if (!Object.keys(jsonData).includes(type))
        throw new Error(`part-type ${type} not known`);
    return new Part(type, jsonData[type].geometry);
}
