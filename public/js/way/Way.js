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

        //array with obstacles from level settings
        this.obstacles = [];

        //add way
        this.radius = 80;
        this.geometry = new THREE.CylinderGeometry(this.radius, this.radius, this.length, 1000);
        this.material = new THREE.MeshLambertMaterial({color: COLOR.way});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.group.add(this.mesh);

        this.currentPosition = {
            angle: 0,
            distance: 50
        }
    }

    /**
     * positions way properly into the scene
     * @param {number} y y position
     * @param {number} z z position
     */
    Way.prototype.position = function (y, z) {
        this.group.rotation.x = Math.PI / 2;
        this.group.position.y = -this.radius-18;
        this.group.position.z = -this.length*0.5+50;
    };

    /**
     * moves way direction z positive
     */
    Way.prototype.moveForwardTillEnd = function () {
        this.group.position.z++;
        this.currentPosition.distance++;
    };

    /**
     * rotates the way around the y axis according to given angle
     * @param {number} angle
     */
    Way.prototype.rotate = function (angle) {
        this.group.rotation.y += angle;
        this.currentPosition.angle = UTIL.convertRadiansToDegrees(this.group.rotation.y);
    };

    /**
     * creates Obstacles out of array and adds them to the way
     * @param {[{}]} obstacles
     */
    Way.prototype.addObstacles = function (obstacles) {
        var self = this;
        //generate obstacles
        self.obstacles = Obstacle.generateFromArray(obstacles, self.length, self.radius);
        //calculate positions
        self.obstacles.forEach(function (obstacle) {
            if(obstacle.distance<self.length){
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