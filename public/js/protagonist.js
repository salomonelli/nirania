/**
 * Represents Protagonist
 * @param {THREE.Scene} scene
 * @constructor
 */
function Protagonist(scene, camera){
    this.scene = scene;
    this.camera = camera;
    this.head = null;
    this.body = new Body(this.camera);
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
        new THREE.SphereGeometry(0.4, 20, 15),
        new THREE.MeshLambertMaterial({
            color: COLOR.protagonist.head,
            transparent: true,
            opacity: 0.8
        })
    );
    //self.head.position.set(0, 0, 0);
    //self.scene.add(self.head);
    //self.body.mesh.rotateY(Math.PI);
    self.body.mesh.position.set(0,0,0);
    self.head.position.set(0,1.45,0);
    self.body.mesh.add(self.head);
    //self.body.mesh.position.z = 700;
    //self.scene.add(self.body.glow);
    self.body.mesh.position.set(0,100,800);
    //self.body.mesh.scale(0.2);
    self.scene.add(self.body.mesh);
};


Protagonist.prototype.run = function(){
    
    

};


Protagonist.prototype.slide = function(){

};

Protagonist.prototype.animateJump = function(){
        console.log("JUMP");
        //console.log(mainScene.objects.protagonist.head.position.y);
        new TWEEN
            .Tween({jump: 0})
            .to({jump: Math.PI}, 500)
            .onUpdate(function () {
                console.log("Update");
                //this.body.mesh.position.y = 2000 * Math.sin(this.jump);
                mainScene.objects.protagonist.head.position.y = 2000 * Math.sin(this.jump);
            })
            .start();

};


Protagonist.init = function(){

};