module.exports = (function (THREE, COLOR, Way, level1, CollisionDetector, Obstacle) {

    var levels = [
        level1
    ];

    /**
     * Represents Level
     * @param {number} current - number starting at 1 representing current level
     * @param {number} speed - speed in milliseconds
     * @constructor
     */
    function Level(current, speed) {
        this.current = current;
        this.way = null;
        this.speed = speed;
        this.collisionDetector = null;
        this.gameOver = false;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function () {
        var self = this;
        var current = levels[self.current - 1];

        this.way = new Way(current.way.length, current.speed);
        this.way.addObstacles(current.way.obstacles);

        //var obstacles = Obstacle.prepareForCollisionDetection(this.way.radius, current.way.obstacles);
        this.collisionDetector = new CollisionDetector(this.way.obstacles);

        this.way.position();
    };

    /**
     * starts level
     * @param {function} cb - callback function
     */
    Level.prototype.begin = function (cb, protagonist) {
        var self = this;
        var t = self.way.length - 80;
        var animate = function () {
            t--;
            //move way and obstacles
            self.way.moveForwardTillEnd();
            //check whether collision
            self.way.currentPosition.height = protagonist.position.y;
            var collObj = self.collisionDetector.collision(self.way.currentPosition);
            if (collObj.collision) {
                if (collObj.type == 'box' || collObj.type == 'ring') {
                    console.log("Getroffenes Objekt: " + collObj.type);
                    console.log('gameover');
                    self.gameOver = true;
                    cb();
                }
                else {
                    if (t > 0) {
                        setTimeout(function () {
                            animate();
                        }, self.speed);
                    } else {
                        cb();
                    }
                }
            } else {
                if (t > 0) {
                    setTimeout(function () {
                        animate();
                    }, self.speed);
                } else {
                    cb();
                }
            }
        };
        animate();
    };

    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level1'),
    require('../protagonist/CollisionDetector'),
    require('../way/obstacles/Obstacle')
);