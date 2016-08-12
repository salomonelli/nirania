module.exports = (function(){
    /**
     * Represents particles
     * @param {THREE.Scene} scene
     * @constructor
     */
    function Particles(scene) {
        this.scene = scene;
        this.group = new THREE.Group();
        this.particle = null;
        this.init();
    }


    /**
     * adds the particles to the mainScene
     */
    Particles.prototype.init = function () {
        var self = this;
        this.scene.add(this.group);

        for (var i = 0; i < 1000; i++) {
            self.particle = new THREE.Mesh(
                new THREE.SphereGeometry( 1, 32, 32 ),
                new THREE.MeshBasicMaterial()
            );
            self.particle.position.x = Math.random() * 5000 - 1000;
            self.particle.position.y = Math.random() * 5000 - 1000;
            self.particle.position.z = Math.random() * 5000 - 1000;
            self.particle.scale.x = this.particle.scale.y = Math.random() * 2 + 1;
            self.group.add(this.particle);
        }

    };

    /**
     * animates the particles in the mainScene
     */
    Particles.prototype.animate = function () {
        this.group.rotation.x += 0.0001;
        this.group.rotation.y += 0.0002;
    };
    return Particles;
})();