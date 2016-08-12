module.exports = (function(COLOR, THREE){
    /**
     * Created by sarasteiert on 05/08/16.
     */
    function Head(){
        this.mesh = null;
        this.geometry = null;
        this.init();
    }


    Head.prototype.init = function(){
        // init head
        var material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(Head.geometry, material);
        //this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 50;
        //this.mesh.castShadow = true;
    };


    Head.init = function(cb){
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/type1/head.json', function(geometry, materials) {
            Head.geometry = geometry;
            cb();
        });
    };

    return Head;
})(
    require('../COLOR'),
    require('three')
);