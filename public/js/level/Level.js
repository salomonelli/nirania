module.exports = (function(THREE, COLOR, Way, level1, level2, level3, CollisionDetector, Obstacle, $, successScreen, gameoverScreen, shopScreen, Cookies, Powerups) {

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
        this.diamonds = 0;
        this.lastDiamond = null;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function() {
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
    Level.prototype.begin = function(cb, protagonist) {
        var self = this;
        self.lastDiamond = null;
        self.diamonds = 0;
        var t = self.way.length - 80;
        var animate = function() {
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
                    case "diamond":
                        self.hitDiamond(collObj);
                        if (t > 0) {
                            setTimeout(function() {
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
                    setTimeout(function() {
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
    Level.prototype.hitDiamond = function(collObj) {
        var self = this;
        if (self.lastDiamond == null){
            console.log("Noch kein Diamand")
            self.lastDiamond = collObj;
            self.diamonds++;
            console.log("Getroffener Diamand");
            self.lastDiamond.mesh.position.y = -5000;
            self.lastDiamond.mesh.position.z = -5000;
            self.lastDiamond.mesh.position.x = -5000;
            $('.anzeige .diamonds span').html(self.diamonds);
        }
        else {
            if (collObj.mesh.id != self.lastDiamond.mesh.id) {
                self.lastDiamond = collObj;
                self.diamonds++;
                console.log("Getroffener Diamand");
                self.lastDiamond.mesh.position.y = -5000;
                self.lastDiamond.mesh.position.z = -5000;
                self.lastDiamond.mesh.position.x = -5000;
                $('.anzeige .diamonds span').html(self.diamonds);
            }
        }
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    Level.prototype.showSuccessScreen = function() {
        var last;
        if (this.current === levels.length) {
            last = "gone";
        } else {
            last = "";
        }
        var obj = {
            score: this.diamonds,
            level: this.current,
            next: this.current + 1,
            last: last
        };
        var html = successScreen.render(obj);
        $('body').append(html);
        this.showShopScreen();
        var marginTop = ($(document).height() - $('#successScreen div').height()) / 2;
        $('#successScreen div.wrapper').css('marginTop', marginTop);
    };

    /**
     * renders hogan tempalte gameover.mustache and adds it to html-body
     */
    Level.prototype.showGameOverScreen = function() {
        var obj = {
            score: this.diamonds,
            level: this.current
        };
        var html = gameoverScreen.render(obj);
        $('body').append(html);
        this.showShopScreen();
        var marginTop = ($(document).height() - $('#gameoverScreen div').height()) / 2;
        $('#gameoverScreen div.wrapper').css('marginTop', marginTop);
    };

    /**
     * adds shop screen
     */
    Level.prototype.showShopScreen = function() {
        var powerups = Powerups.getPowerups();
        var self = this;
        powerups.forEach(function(powerup) {
            if (Powerups.boughtAlready(powerup.id)) {
                powerup.disabled = "hidden";
            } else if (powerup.diamonds <= Level.getTotalDiamonds()) {
                powerup.disabled = "";
            } else {
                powerup.disabled = "disabled";
            }
            powerup.end = "";
        });
        console.dir(Cookies.get());
        powerups[powerups.length - 1].end = "end";
        var html = shopScreen.render({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
        $('div.shopScreen').append(html);
    };

    /**
     * stores the score and success in cookie
     * @param {boolean} success - whether current level has been ended with success
     */
    Level.prototype.setCookie = function(success) {
        if (Cookies.get(this.current + '-success') !== "true") {
            Cookies.set(this.current + '-success', success);
        }
        var obj = Cookies.get();
        if (isNaN(Cookies.get('total'))) {
            Cookies.set('total', this.diamonds);
        } else {
            var sum = parseInt(Cookies.get('total'));
            sum += this.diamonds;
            Cookies.set('total', sum);
        }
    };

    Level.getTotalDiamonds = function() {
        return Cookies.get('total');
    };

    /**
     * checks whether the level can be played
     * @param {number} level - that should be played
     * @returns {boolean}
     */
    Level.canBePlayed = function(level) {
        if (level == 1) {
            return true;
        } else {
            level--;
            console.dir(Cookies.get(level + '-success'));
            if (Cookies.get(level + '-success') == "true") {
                return true;
            } else {
                return false;
            }
        }

    };


    return Level;
})(
    require('three'),
    require('../COLOR'),
    require('../way/Way'),
    require('./level2'),
    require('./level3'),
    require('./level4'),
    require('../protagonist/CollisionDetector'),
    require('../way/obstacles/Obstacle'),
    require('jquery'),
    require('../templates/success.mustache'),
    require('../templates/gameover.mustache'),
    require('../templates/shop.mustache'),
    require('js-cookie'),
    require('./Powerups')
);
