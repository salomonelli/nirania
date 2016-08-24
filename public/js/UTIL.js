module.exports = (function(){
    /**
     * Contains functions that can be used anywhere
     * @constructor
     */
    function UTIL(){

    }

    /**
     * converts degrees to radians
     * @param {number} degrees
     * @returns {number}
     */
    UTIL.convertDegreesToRadians = function(degrees){
        return degrees *(Math.PI/180);
    };

    /**
     * converts radians to degrees
     * @param {number} radians
     * @returns {number}
     */
    UTIL.convertRadiansToDegrees = function(radians){
        return radians *(180/Math.PI);
    };

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     * @returns {number}
     */
    UTIL.randomNumberInRange = function(min, max) {
        return Math.random() * (max - min) + min;
    };

    /**
     * Returns a random int between min (inclusive) and max (exclusive)
     * @returns {number}
     */
    UTIL.randomIntInRange = function(min, max) {
        return Math.round(UTIL.randomNumberInRange(min, max));
    };

    /**
     * normalizes angle
     * @param {number} angle - in degrees
     */
    UTIL.normalizeAngle = function(angle){
      //if (angle < 0) angle = angle + 360; //always positive
      angle = angle % 360; //always <360
      return angle;
    };

    return UTIL;
})();
