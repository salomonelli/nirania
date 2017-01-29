import {
    Util
} from '../Util';
class CollisionDetector {

    /**
     * @param {Obstacle[]} obstacles
     * @constructor
     */
    constructor(obstacles) {
        //sort by distance to save performance
        obstacles = obstacles.sort(function(a, b) {
            try {
                let keyA = CollisionDetector.getMaxDistance(a);
                keyB = CollisionDetector.getMaxDistance(b);
                // Compare the 2 keys
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
            } catch (e) {}
            return 0;
        });
        this.obstacles = obstacles;
        this.currentObstacle = null;
        this.currentPosition = null;
    }

    /**
     * checks whether a collision is possible based on height of current position
     * @return {boolean} true if collision is possible within height
     */
    collisionWithinHeight() {
        return this.currentObstacle.collisionData.size.height > this.currentPosition.height;
    }

    /**
     * checks whether a collision is possible based on distance of current position
     * @return {boolean} true if collisionis possible within height
     */
    collisionWithinDistance() {
        if (
            this.currentObstacle.collisionData.distance.min < this.currentPosition.distance &&
            this.currentPosition.distance < this.currentObstacle.collisionData.distance.max
        ) return true;
        return false;
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

            if (obstacle.collisionData.distance.min < (currentPosition.distance + 100)) {
                currentPosition.anglemin = Util.normalizeAngle(currentPosition.anglemin);
                currentPosition.anglemax = Util.normalizeAngle(currentPosition.anglemax);
                this.currentPosition = currentPosition;
                this.currentObstacle = obstacle;
                if (
                    currentPosition.anglemax < currentPosition.anglemin
                ) currentPosition.anglemax = currentPosition.anglemax + 360;
                if (
                    obstacle.collisionData.angle.max < obstacle.collisionData.angle.min
                ) obstacle.collisionData.angle.max = obstacle.collisionData.angle.max + 360;
                let angleDiffPos = currentPosition.anglemax - currentPosition.anglemin;
                let angleDiffObs = obstacle.collisionData.angle.max - obstacle.collisionData.angle.min;
                if (

                    (
                        //other collision with left body half
                        this.collisionWithinDistance() &&
                        obstacle.collisionData.angle.min < currentPosition.anglemin &&
                        currentPosition.anglemin < obstacle.collisionData.angle.max &&
                        this.collisionWithinHeight()
                    ) ||
                    (
                        //other collisions from right body half.
                        this.collisionWithinDistance() &&
                        obstacle.collisionData.angle.min < currentPosition.anglemax &&
                        currentPosition.anglemax < obstacle.collisionData.angle.max &&
                        this.collisionWithinHeight()
                    ) ||
                    (
                        //cone
                        obstacle.collisionData.type == 'cone' &&
                        this.collisionWithinDistance() &&
                        currentPosition.anglemin < obstacle.collisionData.angle.max &&
                        currentPosition.anglemin > obstacle.collisionData.angle.min
                    ) ||
                    (
                        //cone
                        obstacle.collisionData.type == 'cone' &&
                        this.collisionWithinDistance() &&
                        currentPosition.anglemax < obstacle.collisionData.angle.max &&
                        currentPosition.anglemax > obstacle.collisionData.angle.min
                    ) ||
                    (
                        // protagonist is wider than obstacle
                        angleDiffPos >= angleDiffObs &&
                        this.collisionWithinDistance() &&
                        this.collisionWithinHeight() &&
                        obstacle.collisionData.angle.center > currentPosition.anglemin &&
                        obstacle.collisionData.angle.center < currentPosition.anglemax
                    )

                ) {
                    ret = {
                        collision: true,
                        type: obstacle.collisionData.type,
                        mesh: obstacle.mesh
                    };
                }
            }
        });
        return ret;
    };


}

export function create(obstacles) {
    return new CollisionDetector(obstacles);
}
