module.exports = (function (Box, Ring) {
    var obstacleTypes = {
        box: Box,
        ring: Ring
    };

    /**
     * Represents an Obstacle on the way
     * @param {String} type - string like "cube"
     * @param {THREE.Mesh} mesh - mesh of obstacle
     * @param {number} distance - from starting point of way up to obstacle
     * @param {number} angle - in radiant, on which side the obstacle is positioned
     * @constructor
     */
    function Obstacle(type, mesh, distance, angle) {
        this.type = type;
        this.mesh = mesh;
        this.distance = distance;
        this.angle = angle;
        this.position = {
            x: null,
            y: null,
            z: null
        }
    }

    /**
     * creates from array obstacles and returns them
     * @param {Array} obstacles - contains information to generate obstacles
     * @returns {Array} ret - containing obstacle objects
     */
    Obstacle.generateFromArray = function (obstacles) {
        var ret = [];
        obstacles.forEach(function (o) {
            var obstacle = new obstacleTypes[o.type](o);
            ret.push(new Obstacle(o.type, obstacle.mesh, o.position.distance, o.position.angle));
        });
        return ret;
    };

    /**
     * prepares the array from levelX.js to a proper form that can be used for collision detection
     * @param {number} radius - radius of way
     * @param {Array} obstacles - array from levelX.js with settings of obstacles
     * @returns {Array} ret - array that was prepared for simple collision detection
     */
    Obstacle.prepareForCollisionDetection = function(radius, obstacles){
        var ret = [];
        obstacles.forEach(function(obstacle){
            ret.push(
                obstacleTypes[obstacle.type].prepareForCollisionDetection(obstacle, radius)
            );
        });
        return ret;
    };

    return Obstacle;
})(
    require('./Box'),
    require('./Ring')
);