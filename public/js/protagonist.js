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
    var self = this;
    var loader = new THREE.JSONLoader();
    loader.load('/js/blender/body2.json', function(geometry, materials) {
        self.body = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: COLOR.protagonist.body}));
        self.body.scale.x = self.body.scale.y = self.body.scale.z = 20;
        self.body.translation = THREE.GeometryUtils.center(geometry);
        cb();
    });
};

Protagonist.prototype.init = function(){
    //get body form blender
    var self = this;
    this.getBody(function(){
        self.head = new THREE.Mesh(
            new THREE.SphereGeometry(25, 20, 15),
            new THREE.MeshBasicMaterial({color: COLOR.protagonist.head})
        );
        self.head.position.set(0, 80, 0);
        self.scene.add(self.head);
        self.body.position.z = 700;
        self.scene.add(self.body);
    });
};


Protagonist.prototype.run = function(){

};


Protagonist.prototype.slide = function(){

};

Protagonist.prototype.jump = function(){

};