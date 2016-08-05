/**
 * Created by sarasteiert on 05/08/16.
 */
function Leg(){
    this.mesh = null;
    this.init();
}



Leg.prototype.init = function(){
    this.mesh = new THREE.Mesh(Leg.geometry, new THREE.MeshBasicMaterial({color: COLOR.protagonist.leg}));
    this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 20;
    this.mesh.translation = THREE.GeometryUtils.center(Leg.geometry);
};

Leg.init = function(cb){
    var loader = new THREE.JSONLoader();
    loader.load('/js/blender/leg.json', function(geometry, materials) {
        Leg.geometry = geometry;
        cb();
    });
};