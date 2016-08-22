module.exports = (function () {
    function CollisionDetector(obstacles) {
        this.obstacles = obstacles;
    }
    var removed = []
    /**
     *
     * @param {Object} currentPosition - contains the current distance and angle
     * @returns {boolean} - when true, then collision was detected
     */
    CollisionDetector.prototype.collision = function (currentPosition) {


        for (var i = 0; i < this.obstacles.length; i++) {

            if (
                (this.obstacles[i].collisionData.distance.max < currentPosition.distance)
                ||
                ( this.obstacles[i].collisionData.type == "ring" && this.obstacles[i].collisionData.distance < currentPosition.distance)
            ){
                var index = this.obstacles.indexOf(this.obstacles[i]);

                if(index > -1){
                    removed = this.obstacles.splice(index, 1);

                }


            }

            if (
                (
                    //ring collision
                    this.obstacles[i].collisionData.type == "ring" &&
                    this.obstacles[i].collisionData.distance == currentPosition.distance &&
                    this.obstacles[i].collisionData.size.height > currentPosition.height
                ) ||
                (
                    //other collision with left body half
                    this.obstacles[i].collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < this.obstacles[i].collisionData.distance.max &&
                    this.obstacles[i].collisionData.angle.min < currentPosition.anglemin &&
                    currentPosition.anglemin < this.obstacles[i].collisionData.angle.max &&
                    this.obstacles[i].collisionData.size.height > currentPosition.height
                )||
                (
                    //other collisions from right body half.
                    this.obstacles[i].collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < this.obstacles[i].collisionData.distance.max &&
                    this.obstacles[i].collisionData.angle.min < currentPosition.anglemax &&
                    currentPosition.anglemax < this.obstacles[i].collisionData.angle.max &&
                    this.obstacles[i].collisionData.size.height > currentPosition.height
                )
            ) {

                return {
                    collision: true,
                    type: this.obstacles[i].collisionData.type,
                    mesh: this.obstacles[i].mesh
                };
            }
        }
        return {
            collision: false,
            type: null,
            mesh: null
        }
    };

    return CollisionDetector;
})();