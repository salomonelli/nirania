export let Util = {
  /**
   * converts degrees to radians
   * @param {number} degrees
   * @returns {number}
   */
  convertDegreesToRadians: function(degrees){
      return degrees *(Math.PI/180);
  },

  /**
   * converts radians to degrees
   * @param {number} radians
   * @returns {number}
   */
  convertRadiansToDegrees: function(radians){
      return radians *(180/Math.PI);
  },

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   * @returns {number}
   */
  randomNumberInRange: function(min, max) {
      return Math.random() * (max - min) + min;
  },

  /**
   * Returns a random int between min (inclusive) and max (exclusive)
   * @returns {number}
   */
  randomIntInRange: function(min, max) {
      return Math.round(Util.randomNumberInRange(min, max));
  },

  /**
   * normalizes angle
   * @param {number} angle - in degrees
   */
  normalizeAngle: function(angle){
    //if (angle < 0) angle = angle + 360; //always positive
    angle = angle % 360; //always <360
    return angle;
  }
};
