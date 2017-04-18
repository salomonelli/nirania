import * as THREE from 'three';

const partTypes = [
    'leg',
    'head',
    'body'
];

const geometries = {};

let _initPromise = null;

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

/**
 * TODO use inline json
 * @link http://stackoverflow.com/questions/27992147/three-js-include-mesh-data-in-code/27996338#27996338
 */
export async function init() {
    if (!_initPromise) {
        _initPromise = Promise.all(partTypes.map(type => new Promise(res => {
            const loader = new THREE.JSONLoader();
            loader.load('/blender/' + type + '.json', function(geometry, materials) {
                geometries[type] = geometry;
                res();
            });
        })));
    }
    return _initPromise;
}


export function getByType(type) {
    if (!partTypes.includes(type))
        throw new Error(`part-type ${type} not known`);
    return new Part(type, geometries[type]);
}
