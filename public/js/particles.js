/**
 * Represents particles
 * @constructor
 */
function Particles() {
    var scene = null;
    var group = new THREE.Group();
    var particle = null;

    /**
     * adds the particles to the scene
     * @param {THREE.Scene} s - scene
     */
    this.init = function (s) {
        scene = s;
        scene.add(group);

        for (var i = 0; i < 1000; i++) {
            var material = new THREE.SpriteCanvasMaterial({
                color: COLOR.particles,
                program: function(context){
                    context.beginPath();
                    context.arc(0, 0, 0.5, 0, Math.PI * 2, true);
                    context.fill();
                }
            });
            particle = new THREE.Sprite(material);
            particle.position.x = Math.random() * 2000 - 1000;
            particle.position.y = Math.random() * 2000 - 1000;
            particle.position.z = Math.random() * 2000 - 1000;
            particle.scale.x = particle.scale.y = Math.random() * 2 + 1;
            group.add(particle);
        }
    };

    /**
     * animates the particles
     */
    this.animate = function () {
        group.rotation.x += 0.0001;
        group.rotation.y += 0.0002;
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
