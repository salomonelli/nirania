export class CollisionDetector{

  /**
   * @param {Obstacle[]} obstacles
   * @constructor
   */
  constructor(obstacles){
    //sort by distance to save performance
    obstacles = obstacles.sort(function(a, b) {
        try {
            var keyA = CollisionDetector.getMaxDistance(a);
            keyB = CollisionDetector.getMaxDistance(b);
            // Compare the 2 keys
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
        } catch (e) {}
        return 0;
    });
    this.obstacles = obstacles;
  }


  /**
   * @param {Obstacle} obstacle
   * @return {number}
   * @private
   */
  static getMaxDistance(obstacle){
    if (obstacle.type == 'ring') return obstacle.collisionData.distance;
    return obstacle.collisionData.distance.max;
  }

  /**
   * @param {{distance: number}} currentPosition - contains the current distance and angle
   * @returns {{collision: boolean, type: ?string, mesh: ?THREE.Mesh}}
   */
   collision(currentPosition){
      var self = this;
      var ret = {
          collision: false,
          type: null,
          mesh: null
      };
      self.obstacles.forEach(function(obstacle, i) {
          if (ret.collision) return;
          // check if obstacle should not be checked anymore
          // remove from array with the next garbage-collection
          if (CollisionDetector.getMaxDistance(obstacle) < currentPosition.distance) delete self.obstacles[i];

          if (
              (
                // check if obstacle is near enough otherwise don't even check whether collision
                obstacle.collisionData.distance.min < (currentPosition.distance + 200)
              ) &&
              (
                  //other collision with left body half
                  obstacle.collisionData.distance.min < currentPosition.distance &&
                  currentPosition.distance < CollisionDetector.getMaxDistance(obstacle) &&
                  obstacle.collisionData.angle.min < currentPosition.anglemin &&
                  currentPosition.anglemin < obstacle.collisionData.angle.max &&
                  obstacle.collisionData.size.height > currentPosition.height
              ) ||
              (
                  //other collisions from right body half.
                  obstacle.collisionData.distance.min < currentPosition.distance &&
                  currentPosition.distance < CollisionDetector.getMaxDistance(obstacle) &&
                  obstacle.collisionData.angle.min < currentPosition.anglemax &&
                  currentPosition.anglemax < obstacle.collisionData.angle.max &&
                  obstacle.collisionData.size.height > currentPosition.height
              ) ||
              (
                  //ring collision
                  obstacle.collisionData.type == "ring" &&
                  CollisionDetector.getMaxDistance(obstacle) == currentPosition.distance &&
                  obstacle.collisionData.size.height > currentPosition.height
              ) ||
              (
                  //cone
                  obstacle.collisionData.type == "cone" &&
                  currentPosition.distance < CollisionDetector.getMaxDistance(obstacle) &&
                  currentPosition.distance > obstacle.collisionData.distance.min &&
                  currentPosition.anglemin < obstacle.collisionData.angle.max &&
                  currentPosition.anglemin > obstacle.collisionData.angle.min
              ) ||
              (
                  //cone
                  obstacle.collisionData.type == "cone" &&
                  currentPosition.distance < CollisionDetector.getMaxDistance(obstacle) &&
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


}
