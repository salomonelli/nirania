module.exports = (function(COLOR, THREE){

    /**
     * Represents the body of the protagonist
     * @constructor
     */
    function Body(){
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
    Body.prototype.position = function (x, y, z) {
        this.mesh.position.set(x, y, z);
    };

    /**
     * adds the body to a group
     * @param {THREE.Group} group
     */
    Body.prototype.addToGroup = function (group) {
        group.add(this.mesh);
    };

    /**
     * loads the body from json file (blender)
     * @param {function} cb callback
     */
    Body.init = function(cb){
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/type1/body.json', function(geometry, materials) {
            Body.geometry = geometry;
            cb();
        });
    };

    return Body;
})(
    require('../COLOR'),
    require('three')
);