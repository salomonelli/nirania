/**
 * Represents particles
 * @constructor
 */
function Particles() {
    this.scene = null;
    this.group = new THREE.Group();
    this.particle = null;

    /**
     * adds the particles to the scene
     * @param {THREE.Scene} scene - main scene
     */
    this.init = function (scene) {
        this.scene = scene;
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
     * animates the particles
     */
    this.animate = function () {
        this.group.rotation.x += 0.0001;
        this.group.rotation.y += 0.0002;
    };

}

/**
 * adds the particles to the scene
 */
Particles.prototype.init = function (scene) {
    this.init(scene);
};

/**
 * animates the particles in the scene
 */
Particles.prototype.animate = function () {
    this.animate();
};
