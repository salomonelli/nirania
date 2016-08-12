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