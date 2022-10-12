const THREE = require('three');

export class Particles {
    group: any;
    particle: null;
    x: { min: number; max: number; };
    y: { min: number; max: number; };
    z: { min: number; max: number; };
    /**
     * Represents Particles
     * @param {number} minX - minimum x value
     * @param {number} maxX -maximum x value
     * @param {number} minY - minimum y value
     * @param {number} maxY - maximum y value
     * @param {number} minZ - minimum z value
     * @param {number} maxZ - maximum z value
     * @param {number} amount - amount of particles distributed in given space
     * @constructor
     */
    constructor(
        public minX: number,
        public maxX: number,
        public minY: number,
        public maxY: number,
        public minZ: number,
        public maxZ: number,
        public amount: number
    ) {
        this.group = new THREE.Group();
        this.particle = null;
        this.amount = amount;
        this.x = {
            min: minX,
            max: maxX
        };
        this.y = {
            min: minY,
            max: maxY
        };
        this.z = {
            min: minZ,
            max: maxZ
        };
        this.init();
    }

    /**
     * adds the particles to the mainScene
     */
    init() {
        let self: any = this;
        for (let i = 0; i < self.amount; i++) {
            self.particle = new THREE.Mesh(
                new THREE.SphereGeometry(1, 32, 32),
                new THREE.MeshBasicMaterial()
            );
            self.particle.position.x = Particles.randomIntFromInterval(self.x.min, self.x.max);
            self.particle.position.y = Particles.randomIntFromInterval(self.y.min, self.y.max);
            self.particle.position.z = Particles.randomIntFromInterval(self.z.min, self.z.max);
            self.group.add(self.particle);
        }
    };

    /**
     * animates the particles in the mainScene
     */
    animate() {
        this.group.rotation.z += 0.0004;
    };

    /**
     * rotates the way around the z axis according to given angle
     * @param {number} angle
     */
    rotate(angle: number) {
        this.group.rotation.z += angle;
    };

    /**
     * positions particles according to given coordinates
     * @param {number} x - x position of particles group
     * @param {number} y - y position of particles group
     * @param {number} z - z position of particles group
     */
    position(x: number, y: number, z: number) {
        this.group.position.set(x, y, z);
    };

    /**
     * adds particles to given scene
     * @param {THREE.Scene} scene - scene to which the particles will be added
     */
    addToScene(scene: any) {
        scene.add(this.group);
    };

    /**
     * removes particles from given scene
     * @param {THREE.Scene} scene - scene from which the particles will be removed
     */
    removeFromScene(scene: any) {
        scene.remove(this.group);
    };

    /**
     * calculates random integer from interval
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

}
