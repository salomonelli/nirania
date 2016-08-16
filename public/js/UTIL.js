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

    return UTIL;
})();