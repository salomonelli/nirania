module.exports = (function (THREE, COLOR, Way,  level1) {
    var levels = [
        level1
    ];
    /**
     * Represents Level
     * @param {number} current - number starting at 1 representing current level
     * @constructor
     */
    function Level(current, speed) {
        this.current = current;
        this.way = null;
        this.speed = speed;
        this.collisionDetector = null;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function () {
        var self = this;
        var current = levels[self.current-1];
        //create new way
        this.way = new Way(current.way.length, current.speed);
        //add obstacles to way
        this.way.addObstacles(current.way.obstacles);
        //position way into the scene
        this.way.position( -120, -450);
    };

    /**
     * starts level
     * @param {function} cb - callback function
     */
    Level.prototype.begin = function(cb){
        this.way.moveForwardTillEnd(function(){
            //level succeeded
            cb();
        });
    };

    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level1')
);