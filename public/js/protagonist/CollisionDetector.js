module.exports = (function() {

    /**
     * @param {Obstacle} obstacle
     * @return {number}
     * @private
     */
    var _getMaxDistance = function(obstacle) {
        if (obstacle.type == 'ring') return obstacle.collisionData.distance;
        return obstacle.collisionData.distance.max;
    };

    /**
     * @param {Obstacle[]} obstacles
     * @constructor
     */
    function CollisionDetector(obstacles) {
        //sort by distance to save performance
        obstacles = obstacles.sort(function(a, b) {
            try {
                var keyA = _getMaxDistance(a);
                keyB = _getMaxDistance(b);
                // Compare the 2 keys
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
            } catch (e) {}
            return 0;
        });
        this.obstacles = obstacles;
    }

    /**
     * @param {{distance: number}} currentPosition - contains the current distance and angle
     * @returns {{collision: boolean, type: ?string, mesh: ?THREE.Mesh}}
     */
    CollisionDetector.prototype.collision = function(currentPosition) {
        var self = this;
        var ret = {
            collision: false,
            type: null,
            mesh: null
        };
        self.obstacles.forEach(function(obstacle, i) {
            if (ret.collision) return;
            //check if obstacle should not be checked anymore
            if (_getMaxDistance(obstacle) < currentPosition.distance) {
                delete self.obstacles[i]; //remove from array with the next garbage-collection
            }


            if (
                (
                    //other collision with left body half
                    obstacle.collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < _getMaxDistance(obstacle) &&
                    obstacle.collisionData.angle.min < currentPosition.anglemin &&
                    currentPosition.anglemin < obstacle.collisionData.angle.max &&
                    obstacle.collisionData.size.height > currentPosition.height
                ) ||
                (
                    //other collisions from right body half.
                    obstacle.collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < _getMaxDistance(obstacle) &&
                    obstacle.collisionData.angle.min < currentPosition.anglemax &&
                    currentPosition.anglemax < obstacle.collisionData.angle.max &&
                    obstacle.collisionData.size.height > currentPosition.height
                ) ||
                (
                    //ring collision
                    obstacle.collisionData.type == "ring" &&
                    _getMaxDistance(obstacle) == currentPosition.distance &&
                    obstacle.collisionData.size.height > currentPosition.height
                )
            ) {

                ret = {
                    collision: true,
                    type: obstacle.collisionData.type,
                    mesh: obstacle.mesh
                };
            }
            if (
                (
                    //cone
                    obstacle.collisionData.type == "cone" &&
                    currentPosition.distance < _getMaxDistance(obstacle) &&
                    currentPosition.distance > obstacle.collisionData.distance.min &&
                    currentPosition.anglemin < obstacle.collisionData.angle.max &&
                    currentPosition.anglemin > obstacle.collisionData.angle.min
                ) ||
                (
                    //cone
                    obstacle.collisionData.type == "cone" &&
                    currentPosition.distance < _getMaxDistance(obstacle) &&
                    currentPosition.distance > obstacle.collisionData.distance.min &&
                    currentPosition.anglemax < obstacle.collisionData.angle.max &&
                    currentPosition.anglemax > obstacle.collisionData.angle.min
                )
            ) {
              ret = {
                  collision: true,
                  type: obstacle.collisionData.type,
                  mesh: obstacle.mesh
              };
            }
        });
        return ret;
    };
    return CollisionDetector;
})();
