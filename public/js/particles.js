/**
 * Represents particles
 * @constructor
 */
function Particles(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.particle = null;
    this.init();
}


/**
 * adds the particles to the scene
 */
Particles.prototype.init = function () {
    this.scene.add(this.group);
    for (var i = 0; i < 1000; i++) {
        var material = new THREE.SpriteCanvasMaterial({
            color: COLOR.particles,
            program: function(context){
                context.beginPath();
                context.arc(0, 0, 0.5, 0, Math.PI * 2, true);
                context.fill();
            }
        });
        this.particle = new THREE.Sprite(material);
        this.particle.position.x = Math.random() * 2000 - 1000;
        this.particle.position.y = Math.random() * 2000 - 1000;
        this.particle.position.z = Math.random() * 2000 - 1000;
        this.particle.scale.x = this.particle.scale.y = Math.random() * 2 + 1;
        this.group.add(this.particle);
    }
};

/**
 * animates the particles in the scene
 */
Particles.prototype.animate = function () {
    this.group.rotation.x += 0.0001;
    this.group.rotation.y += 0.0002;
};

