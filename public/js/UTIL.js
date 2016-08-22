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

    return UTIL;
})();
