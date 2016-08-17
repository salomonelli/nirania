module.exports = (function (COLOR, THREE) {

    /**
     * Represents leg of protagonist
     * @constructor
     */
    function Leg() {
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
    Leg.prototype.position = function (x, y, z) {
        this.mesh.position.set(x, y, z);
    };

    /**
     * adds the leg to a group
     * @param {THREE.Group} group
     */
    Leg.prototype.addToGroup = function (group) {
        group.add(this.mesh);
    };

    /**
     * loads the leg from json file (blender)
     * @param {function} cb callback
     */
    Leg.init = function (cb) {
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/type1/leg.json', function (geometry, materials) {
            Leg.geometry = geometry;
            cb();
        });
    };

    return Leg;
})(
    require('../COLOR'),
    require('three')
);