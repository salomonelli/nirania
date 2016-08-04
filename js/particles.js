function Particles(){
  this.scene = null;
  this.group = new THREE.Group();
  this.particle = null;

  this.init = function(scene){
    this.scene = scene;
    var PI2 = Math.PI * 2;
    var program = function(context) {
        context.beginPath();
        context.arc(0, 0, 0.5, 0, PI2, true);
        context.fill();
    };
    this.scene.add(this.group);
    for (var i = 0; i < 1000; i++) {
        var material = new THREE.SpriteCanvasMaterial({
            color: 0xffffff,//FD5C98,//ffffff, //Math.random() * 0x808008 + 0x808080,
            program: program
        });
        this.particle = new THREE.Sprite(material);
        this.particle.position.x = Math.random() * 2000 - 1000;
        this.particle.position.y = Math.random() * 2000 - 1000;
        this.particle.position.z = Math.random() * 2000 - 1000;
        this.particle.scale.x = this.particle.scale.y = Math.random() * 2 + 1;
        this.group.add(this.particle);
    }
  };

  this.animate = function(){
    this.group.rotation.x += 0.0001;
    this.group.rotation.y += 0.0002;
  };

}

Particles.prototype.init = function () {
  this.init();
};

Particles.prototype.animate = function(){
  this.animate();
};
