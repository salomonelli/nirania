module.exports = (function (THREE, COLOR, Way, level1, level2, level3, CollisionDetector, Obstacle, $, successScreen, gameoverScreen, Cookies) {

    var levels = [
        level1,
        level2,
        level3
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
        this.score = 0;
        this.lastDiamond = null;
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
        self.lastDiamond = null;
        self.score = 0;
        var t = self.way.length - 80;
        var animate = function () {
            t--;
            //move way and obstacles
            self.way.moveForwardTillEnd();
            //check whether collision
            self.way.currentPosition.height = protagonist.position.y;
            var collObj = self.collisionDetector.collision(self.way.currentPosition);
            if (collObj.collision) {
                switch (collObj.type) {
                    case "box":
                    case "ring":
                        self.gameOver = true;
                        cb();
                        return;
                        break;
                    case "diamond":
                        self.hitDiamond(collObj);
                        if (t > 0) {
                            setTimeout(function () {
                                animate();
                            }, self.speed);
                        } else {
                            cb();
                            return;
                        }
                        break;
                    default:
                        console.log('Level.prototype.begin(): Obstacle type is unknown.');
                        break;
                }
            } else {
                if (t > 0) {
                    setTimeout(function () {
                        animate();
                    }, self.speed);
                } else {
                    cb();
                    return;
                }
            }
        };
        animate();
    };

    /**
     * increases score on diamond hit and removes it
     * @param {Obstacle} collObj - diamond whitch which the collision happened
     */
    Level.prototype.hitDiamond = function (collObj) {
        var self = this;
        if (self.lastDiamond){
            if(collObj.mesh.id != self.lastDiamond.mesh.id){
                //TODO let diamond fly away
                self.lastDiamond = collObj;
                self.score++;
            }
        }else{
            self.lastDiamond = collObj;
        }
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    Level.prototype.showSuccessScreen = function () {
        var obj = {
            score: this.score,
            level: this.current,
            next: this.current + 1
        };
        var html = successScreen.render(obj);
        $('body').append(html);
        var marginTop = ($(document).height() - $('#successScreen div').height()) / 2;
        $('#successScreen div').css('marginTop', marginTop);
    };

    /**
     * renders hogan tempalte gameover.mustache and adds it to html-body
     */
    Level.prototype.showGameOverScreen = function () {
        var obj = {
            score: this.score,
            level: this.current
        };
        var html = gameoverScreen.render(obj);
        $('body').append(html);
        var marginTop = ($(document).height() - $('#gameoverScreen div').height()) / 2;
        $('#gameoverScreen div').css('marginTop', marginTop);
    };

    /**
     * stores the score and success in cookie
     * @param {boolean} success - whether current level has been ended with success
     */
    Level.prototype.setCookie = function (success) {
        Cookies.set(this.current + '-success', success);
        Cookies.set(this.current, this.score);
        var all = Cookies.get();
        var sum = 0;
        Cookies.set('total', sum);
        Object.keys(all).forEach(function (key, index) {
            if(key.indexOf('-success') !== -1){
                sum += all[key]
            }
        });
        console.log(sum);
        Cookies.set('total', sum);
        console.log('cookies:');
        console.dir(Cookies.get());
    };

    /**
     * checks whether the level can be played
     * @param {number} level - that should be played
     * @returns {boolean}
     */
    Level.canBePlayed = function (level) {
        level--;
        if (Cookies.get(level - 'success')) {
            return true;
        } else {
            return false;
        }
    };


    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level1'),
    require('./level2'),
    require('./level3'),
    require('../protagonist/CollisionDetector'),
    require('../way/obstacles/Obstacle'),
    require('jquery'),
    require('../templates/success.mustache'),
    require('../templates/gameover.mustache'),
    require('js-cookie')
);