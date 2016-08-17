module.exports = (function (Box, Ring, Diamond, Opponent) {
    var obstacleTypes = {
        box: Box,
        ring: Ring,
        diamond: Diamond,
        opponent: Opponent
    };

    /**
     * Represents an Obstacle on the way
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
    }

    /**
     * creates from array obstacles and returns them
     * @param {Array} obstacles - contains information to generate obstacles
     * @returns {Array} ret - containing obstacle objects
     */
    Obstacle.generateFromArray = function (obstacles, wayLength, radius) {
        var ret = [];
        obstacles.forEach(function (o) {
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

    return Obstacle;
})(
    require('./Box'),
    require('./Ring'),
    require('./Diamond'),
    require('./Opponent')
);