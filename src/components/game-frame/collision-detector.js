class CollisionDetector {

    /**
     * @param {Obstacle[]} obstacles
     * @constructor
     */
    constructor(obstacles) {
        //sort by distance to save performance
        obstacles = obstacles.sort(function(a, b) {
            try {
                const keyA = CollisionDetector.getMaxDistance(a);
                const keyB = CollisionDetector.getMaxDistance(b);
                // Compare the 2 keys
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
            } catch (e) {}
            return 0;
        });
        this.obstacles = obstacles;
        this.lastObstacleId = null;
    }

    /**
     * @param {{distance: number}} currentPosition - contains the current distance and angle
     * @returns {{collision: boolean, type: ?string, mesh: ?THREE.Mesh}}
     */
    collision(currentPosition) {
        let self = this;
        let ret = {
            collision: false,
            type: null,
            mesh: null
        };
        self.obstacles.forEach((obstacle, i) => {

            if (ret.collision) return;
            // check if obstacle should not be checked anymore
            // remove from array with the next garbage-collection
            if (obstacle.collisionData.distance.max < currentPosition.distance) delete self.obstacles[i];

            if (
                // check if obstacle is near enough otherwise don't even check whether collision
                obstacle.collisionData.distance.min < (currentPosition.distance + 100) &&
                (
                    //other collision with left body half
                    obstacle.collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < obstacle.collisionData.distance.max &&
                    obstacle.collisionData.angle.min < currentPosition.anglemin &&
                    currentPosition.anglemin < obstacle.collisionData.angle.max &&
                    obstacle.collisionData.size.height > currentPosition.height
                ) ||
                (
                    //other collisions from right body half.
                    obstacle.collisionData.distance.min < currentPosition.distance &&
                    currentPosition.distance < obstacle.collisionData.distance.max &&
                    obstacle.collisionData.angle.min < currentPosition.anglemax &&
                    currentPosition.anglemax < obstacle.collisionData.angle.max &&
                    obstacle.collisionData.size.height > currentPosition.height
                ) ||
                (
                    //cone
                    obstacle.collisionData.type == 'cone' &&
                    currentPosition.distance < obstacle.collisionData.distance.max &&
                    currentPosition.distance > obstacle.collisionData.distance.min &&
                    currentPosition.anglemin < obstacle.collisionData.angle.max &&
                    currentPosition.anglemin > obstacle.collisionData.angle.min
                ) ||
                (
                    //cone
                    obstacle.collisionData.type == 'cone' &&
                    currentPosition.distance < obstacle.collisionData.distance.max &&
                    currentPosition.distance > obstacle.collisionData.distance.min &&
                    currentPosition.anglemax < obstacle.collisionData.angle.max &&
                    currentPosition.anglemax > obstacle.collisionData.angle.min
                )
            ) {
                if(
                    this.lastObstacleId === obstacle.mesh.id
                ) return ret;
                this.lastObstacleId = obstacle.mesh.id;
                ret = {
                    collision: true,
                    type: obstacle.collisionData.type,
                    mesh: obstacle.mesh
                };
            }
        });
        return ret;
    };


}

export function create(obstacles) {
    return new CollisionDetector(obstacles);
}
