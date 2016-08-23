module.exports = (function (THREE, COLOR, Obstacle, UTIL, $, Cookies) {
    /**
     * Represents way
     * @param {number} length how long the way is
     * @param {number} speed how fast the way should move
     * @constructor
     */
    function Way(length, speed, color) {
        this.length = length;
        this.speed = speed;

        this.group = new THREE.Object3D();

        this.obstacles = [];

        this.radius = 80;
        this.segments = 1000;
        this.geometry = new THREE.CylinderGeometry(this.radius, this.radius, this.length, this.segments);
        this.material = new THREE.MeshLambertMaterial({color: color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.group.add(this.mesh);

        this.currentPosition = {
            angle: 0,
            anglemin: -5,
            anglemax: 5,
            distance: 50,
            height: 0
        };
    }

    /**
     * positions way properly into the scene
     * @param {number} y y position
     * @param {number} z z position
     */
    Way.prototype.position = function () {
        this.group.rotation.x = Math.PI / 2;
        this.group.position.y = -this.radius-18;
        this.group.position.z = -this.length*0.5+50;
    };

    /**
     * moves way direction z positive
     */
    Way.prototype.moveForwardTillEnd = function (speed) {
        
        this.group.position.z = this.group.position.z + speed;
        this.currentPosition.distance = this.currentPosition.distance + speed;
        //TODO remove this after finished programming
        $('.scores .distance span').html(this.currentPosition.distance);
    };

    /**
     * rotates the way around the y axis according to given angle
     * @param {number} angle
     */
    Way.prototype.rotate = function (angle) {
        if(UTIL.convertRadiansToDegrees(this.group.rotation.y)>= 360 )
        {
            this.group.rotation.y = 0;
        }
        else if(UTIL.convertRadiansToDegrees(this.group.rotation.y) < 0 )
        {
            this.group.rotation.y = UTIL.convertDegreesToRadians(360);
        }
        var speedRotation = angle;
        // roatates faster with powerup 1
        if (Cookies.get('powerup-1') == "bought") speedRotation = speedRotation*2;
        this.group.rotation.y += speedRotation;
        this.currentPosition.angle = UTIL.convertRadiansToDegrees(this.group.rotation.y);
        // anglemin and anglemax are hitbox for protagonist
        this.currentPosition.anglemin = this.currentPosition.angle - 5;
        if(this.currentPosition.anglemin <0) this.currentPosition.anglemin = this.currentPosition.anglemin +360;
        if(this.currentPosition.anglemax > 360) this.currentPosition.anglemax = this.currentPosition.anglemax -360;
        this.currentPosition.anglemax = this.currentPosition.angle + 5;
       

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

    /**
     * adds way to given scene
     * @param {THREE.Scene} scene - scene to which the way will be added
     */
    Way.prototype.addToScene = function(scene){
        scene.add(this.group);
    };

    return Way;
})(
    require('three'),
    require('../COLOR'),
    require('./obstacles/Obstacle'),
    require('../UTIL'),
    require('jquery'),
    require('js-cookie')
);
