module.exports = (function (THREE, COLOR, Obstacle, UTIL) {
    /**
     * Represents way
     * @param {number} length how long the way is
     * @param {number} speed how fast the way should move
     * @constructor
     */
    function Way(length, speed) {
        this.length = length;
        this.speed = speed;

        //create an empty container
        this.group = new THREE.Object3D();

        //add way
        this.radius = 100;
        this.geometry = new THREE.CylinderGeometry(this.radius, this.radius, 1000, this.length);
        this.material = new THREE.MeshLambertMaterial({color: COLOR.way});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.group.add(this.mesh);
    }

    /**
     * positions way properly into the scene
     * @param {number} y y position
     * @param {number} z z position
     */
    Way.prototype.position = function (y, z) {
        this.group.rotation.x = Math.PI / 2;
        this.group.position.y = y;
        this.group.position.z = z;
    };

    /**
     * moves way direction z positive according to speed
     * @param {function} cb callback function
     */
    Way.prototype.moveForwardTillEnd = function (cb) {
        var self = this;
        var t = self.length - 80;
        var animate = function () {
            self.group.position.z++;
            t--;
            if (t > 0) {
                setTimeout(function () {
                    animate();
                }, self.speed);
            } else {
                cb();
            }
        };
        animate();
    };

    /**
     * rotates the way around the y axis according to given angle
     * @param {number} angle
     */
    Way.prototype.rotate = function (angle) {
        this.group.rotation.y += angle;
    };

    /**
     * creates Obstacles out of array and adds them to the way
     * @param {[{}]} obstacles
     */
    Way.prototype.addObstacles = function (obstacles) {
        var self = this;
        //generate obstacles
        self.obstacles = Obstacle.generateFromArray(obstacles);
        //calculate positions
        self.obstacles.forEach(function (obstacle) {
            if(obstacle.distance<self.length){
                var angle = UTIL.convertDegreesToRadians(obstacle.angle);
                var y = (self.length / 2) - obstacle.distance;
                var x = self.radius * Math.cos(angle) + 0;
                var z = -(self.radius * Math.sin(angle) + 0);
                obstacle.mesh.rotation.y += angle;
                obstacle.mesh.position.set(x,y,z);
                self.group.add(obstacle.mesh);
            }else{
                console.log('Way.prototype.addObstacles(): ATTENTION!! Obstacle was not added. Distance of Obstacles is greater than the length of the way.')
            }
        });
    };

    return Way;
})(
    require('three'),
    require('../COLOR'),
    require('./obstacles/Obstacle'),
    require('../UTIL')
);