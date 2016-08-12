module.exports = (function(COLOR, THREE){
    /**
     * Created by sarasteiert on 05/08/16.
     */
    function Leg(){
        this.mesh = null;
        this.geometry = null;
        this.init();
    }


    Leg.prototype.init = function(){
        // init head
        var material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(Leg.geometry, material);
        //this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 50;
        //this.mesh.castShadow = true;
    };


    Leg.init = function(cb){
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/type1/leg.json', function(geometry, materials) {
            Leg.geometry = geometry;
            cb();
        });
    };

    return Leg;
})(
    require('../COLOR'),
    require('three')
);