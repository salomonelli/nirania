/**
 * Created by sarasteiert on 05/08/16.
 */
function Body(){
    this.mesh = null;
    this.geometry = null;
    this.init();
}


Body.prototype.init = function(){
    this.mesh = new THREE.Mesh(Body.geometry, new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
    }));
    console.dir(this.mesh);
    this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 5;
    this.mesh.translation = THREE.GeometryUtils.center(Body.geometry);
};


Body.init = function(cb){
    var loader = new THREE.JSONLoader();
    loader.load('/js/blender/lowerbody.json', function(geometry, materials) {
        Body.geometry = geometry;
        cb();
    });
};