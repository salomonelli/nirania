module.exports = (function(Box, Ring, Diamond, Cone, UTIL) {
    var obstacleTypes = {
        box: Box,
        ring: Ring,
        diamond: Diamond,
        cone: Cone
    };

    /**
     * Represents an Obstacle on wthe way
     * @param {String} type - string like "cube"
     * @param {THREE.Mesh} mesh - mesh of obstacle
     * @param {number} distance - from starting point of way up to obstacle
     * @param {number} angle - in radiant, on which side the obstacle is positioned
     * @constructor
     */
    function Obstacle(type, mesh, distance, angle, collisionData) {
        this.type = type;
        this.mesh = mesh;
        this.distance = distance;
        this.angle = angle;
        this.collisionData = collisionData;
        this.randomMoving = false;

        //used if moving obstacle
        if (type == 'cone') {
            this.randomMoving = true;
            this.directionChangeIndex = 0;
            this.direction = true; //true == 'right', false == 'left'
        }
    }

    /**
     * creates from array obstacles and returns them
     * @param {Array} obstacles - contains information to generate obstacles
     * @returns {Array} ret - containing obstacle objects
     */
    Obstacle.generateFromArray = function(obstacles, wayLength, radius) {
        var ret = [];
        obstacles.forEach(function(o) {
            var obstacle = new obstacleTypes[o.type](o);
            obstacle.position(o.position.angle, o.position.distance, wayLength, radius);
            var collisionData = obstacleTypes[o.type].prepareForCollisionDetection(o, radius);
            ret.push(
                new Obstacle(
                    o.type,
                    obstacle.mesh,
                    o.position.distance,
                    o.position.angle,
                    collisionData
                )
            );
        });
        return ret;
    };

    Obstacle.prototype.move = function(direction) {
        if (direction) this.angle += 1;
        else this.angle -= 1;

        this.angle = UTIL.normalizeAngle(this.angle);

        var radius = 80 + 15;
        var angle = -(this.angle -90);
        angle  = UTIL.convertDegreesToRadians(angle);
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.mesh.rotation.y = angle;
        this.mesh.position.x = x;
        this.mesh.position.z = z;

        //neue angle ist this.angle
        var a = radius - 0.5 * 30;
        var b = 30 * 0.5;
        var angleRight = UTIL.convertRadiansToDegrees(Math.atan(b / a));
        this.collisionData.angle.center = this.angle;
        this.collisionData.angle.min = UTIL.normalizeAngle(this.angle - angleRight);
        this.collisionData.angle.max = UTIL.normalizeAngle(this.angle + angleRight);
    };

    return Obstacle;
})(
    require('./Box'),
    require('./Ring'),
    require('./Diamond'),
    require('./Cone'),
    require('../../UTIL')
);
