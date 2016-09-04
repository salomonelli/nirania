module.exports = (function (COLOR, THREE) {

    /**
     * Represents head of protagonist
     * @constructor
     */
    function Head() {
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
    Head.prototype.position = function (x, y, z) {
        this.mesh.position.set(x, y, z);
    };

    /**
     * adds the head to a group
     * @param {THREE.Group} group
     */
    Head.prototype.addToGroup = function (group) {
        group.add(this.mesh);
    };

    /**
     * loads the head from json file (blender)
     * @param {function} cb callback
     */
    Head.init = function (cb) {
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/head.json', function (geometry, materials) {
            Head.geometry = geometry;
            cb();
        });
    };

    return Head;
})(
    require('../COLOR'),
    require('three')
);
