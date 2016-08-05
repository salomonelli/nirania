/**
 * Represents Protagonist
 * @param {THREE.Scene} scene
 * @constructor
 */
function Protagonist(scene){
    this.scene = scene;
    this.head = null;
    this.body = null;
    this.left = {
        foot: null,
        arm: null
    };
    this.right = {
        foot: null,
        arm: null
    };
    this.init();
}

Protagonist.prototype.getBody = function(cb){
    var loader = new THREE.JSONLoader();
    loader.load('/js/blender/body2.json', function(geometry, materials) {
        this.body = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: COLOR.protagonist.body}));
        this.body.scale.x = this.body.scale.y = this.body.scale.z = 20;
        this.body.translation = THREE.GeometryUtils.center(geometry);
        cb();
    });
};

Protagonist.prototype.init = function(){
    //get body form blender
    this.getBody(function(){
        this.head = new THREE.Mesh(
            new THREE.SphereGeometry(25, 20, 15),
            new THREE.MeshBasicMaterial({color: COLOR.protagonist.head})
        );
        this.head.position.set(0, 80, 0);
        scene.add(this.head);
        this.body.position.z = 700;
        scene.add(this.body);
    });
};


Protagonist.prototype.run = function(){

};


Protagonist.prototype.slide = function(){

};

Protagonist.prototype.jump = function(){

};