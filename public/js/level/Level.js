module.exports = (function (THREE, COLOR, Way,  level1) {

    /**
     * Represents Level
     * @param {number} current number starting at 1 representing current level
     * @constructor
     */
    function Level(current, speed) {
        this.current = current;
        this.way = null;
        this.obstacles = [];
        this.speed = speed;
    }

    /**
     * generates and positions three meshes for the current level
     */
    Level.prototype.prepare = function () {
        var self = this;
        var way, speed;
        switch (self.current){
            case 1:
                way = level1.way;
                speed = level1.speed;
                break;
        }
        this.way = new Way(way.length, speed);
    };

    /**
     * starts level
     * @param {function} cb callback function
     */
    Level.prototype.begin = function(cb){
        this.way.moveForwardTillEnd(function(){
            console.log('end of level1');
        });
    };

    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level1')
);