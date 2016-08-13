module.exports = (function(THREE){
    /**
     * Represents particles
     * @constructor
     */
    function Particles() {
        this.group = new THREE.Group();
        this.particle = null;
        this.init();
    }


    /**
     * adds the particles to the mainScene
     */
    Particles.prototype.init = function () {
        var self = this;

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

    /**
     * rotates the way around the z axis according to given angle
     * @param {number} angle
     */
    Particles.prototype.rotate = function(angle){
        this.group.rotation.y += angle;
    };

    return Particles;
})(
    require('three')
);