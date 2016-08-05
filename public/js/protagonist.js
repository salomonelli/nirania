/**
 * Represents Protagonist
 * @param {THREE.Scene} scene
 * @constructor
 */
function Protagonist(scene){
    this.scene = scene;
    this.head = null;
    this.body = new Body();
    this.left = {
        leg: new Leg(),
        arm: null
    };
    this.right = {
        leg: new Leg(),
        arm: null
    };
    this.init();
}

Protagonist.prototype.getBody = function(cb){

};

Protagonist.prototype.init = function(){
    //get body form blender
    var self = this;
    self.head = new THREE.Mesh(
        new THREE.SphereGeometry(25, 20, 15),
        new THREE.MeshBasicMaterial({color: COLOR.protagonist.head})
    );
    self.head.position.set(0, 80, 0);
    self.scene.add(self.head);
    self.body.mesh.position.z = 700;
    self.scene.add(self.body.mesh);
};


Protagonist.prototype.run = function(){

};


Protagonist.prototype.slide = function(){

};

Protagonist.prototype.jump = function(){

};


Protagonist.init = function(){

};