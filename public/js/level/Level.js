module.exports = (function (THREE, COLOR, Way, level1, CollisionDetector, Obstacle) {
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
        var current = levels[self.current - 1];
        //create new way
        this.way = new Way(current.way.length, current.speed);
        //add obstacles to way
        this.way.addObstacles(current.way.obstacles);
        var obstacles = Obstacle.prepareForCollisionDetection(this.way.radius, current.way.obstacles)
        this.collisionDetector = new CollisionDetector(obstacles);
        //position way into the scene
        this.way.position(-120, -450);
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
            if(self.collisionDetector.collision(self.way.currentPosition)){
                console.dir(self.way.currentPosition);
                console.log(self.collisionDetector.collision.type);
                console.log('gameover');
            }else{
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

        /*
        var self = this;
        var levelEnd = false;
        var checkCollision = function () {
            if(self.collisionDetector.collision(self.way.currentPosition)){
                //collision
                console.log('gameover');
            }else if(!levelEnd){
                //no collision and level is not over => repeat this function

            }

            /*if (self.collisionDetector.collision(self.way.currentPosition)) {
                //game over
                self.way.stopTurning();
                console.log('GAME OVER');
            } else if (!levelEnd) {
                checkCollision();
            }
        };
        checkCollision();
        self.way.moveForwardTillEnd(function () {
            //level succeeded
            levelEnd = true;
            cb();
        });*/
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