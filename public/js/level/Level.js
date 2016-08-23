module.exports = (function(Way, CollisionDetector, Obstacle, $, Cookies, Powerups) {

    var levels = [
        require('./level1'),
        require('./level2'),
        require('./level3'),
        require('./level4'),
        require('./level5')
    ];

    var _templates = {
        successScreen: require('../templates/success.mustache'),
        gameoverScreen: require('../templates/gameover.mustache'),
        shopScreen: require('../templates/shop.mustache'),
        modalContentShopScreen: require('../templates/shopModalContent.mustache')
    };

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
        this.powerupActive = false;
        this.powerupActiveDuration = 0;
        this.powerUpDistance = 0;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function() {
        var self = this;
        var current = levels[self.current - 1];
        this.way = new Way(current.way.length, current.speed, current.way.color);

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
        var speedMulti = 2;
        var animate = function() {
            //move way and obstacles
            console.log(self.powerupActive) ;
            console.log(self.powerupActiveDuration);
            if(self.powerupActive && self.powerupActiveDuration - self.powerUpDistance > 0){
                console.log("Methode offfen!!!!!!!!!!!!!!!!!!!!!!");
                for(var i = 0; i < protagonist.children.length; i++){
                    protagonist.children[i].material.transparent = true;
                    protagonist.children[i].material.opacity = 0.3;
                }
                self.powerUpDistance = self.powerUpDistance +speedMulti;
            }
            else{
                for(var i = 0; i < protagonist.children.length; i++){
                    protagonist.children[i].material.transparent = false;
                    protagonist.children[i].material.opacity = 0.8;
                }
            }

            t = t - speedMulti;
            self.way.moveForwardTillEnd(self.speed * speedMulti);

            if (t <= 0) {
                //end is reached
                cb();
                return;
            }

            //check whether collision
            self.way.currentPosition.height = protagonist.position.y;
            var collObj = self.collisionDetector.collision(self.way.currentPosition);
            switch (collObj.type) {
                case "box":
                case "ring":
                    // if powerup 4 is active, no collsion detection for the first 500
                    if(self.powerupActive && self.powerupActiveDuration - self.powerUpDistance > 0){
                        console.log(protagonist.children[1].material);
                        console.log("Powerup 4 aktiv!!!!!");
                            break;
                    }
                    self.gameOver = true;
                    cb();
                    return;
                case "diamond":
                    self.hitDiamond(collObj);
                    break;

            }
            setTimeout(function() {
                animate();
            }, self.speed);
        };

        animate(); //once
    };

    /**
     * increases score on diamond hit and removes it
     * @param {Obstacle} collObj - diamond whitch which the collision happened
     */
    Level.prototype.hitDiamond = function(collObj) {
        var self = this;
        if (!self.lastDiamond || collObj.mesh.id != self.lastDiamond.mesh.id) {
            self.lastDiamond = collObj;
            self.diamonds++;
            self.lastDiamond.mesh.visible = false;
            $('.anzeige .diamonds span').html(self.diamonds);
        }
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    Level.prototype.showSuccessScreen = function() {
        var last = '';
        if (this.current === levels.length) last = "gone";
        var canNotBePlayed, disableNextLevel;
        if (!Level.canBePlayed(this.current + 1)) {
            canNotBePlayed = "true";
            disableNextLevel = "disabled";
        }
        var html = _templates.successScreen.render({
            score: this.diamonds,
            level: this.current,
            next: this.current + 1,
            last: last,
            canBePlayed: canNotBePlayed,
            disableNextLevel: disableNextLevel
        });
        $('body').append(html);
        this.showShopScreen();

        //TODO use css-class .vertical-center
        var marginTop = ($(document).height() - $('#successScreen div').height()) / 2;
        $('#successScreen div.wrapper').css('marginTop', marginTop);
    };

    /**
     * renders hogan template gameover.mustache and adds it to html-body
     */
    Level.prototype.showGameOverScreen = function() {
        var html = _templates.gameoverScreen.render({
            score: this.diamonds,
            level: this.current
        });

        $('body').append(html);
        this.showShopScreen();
        //TODO use css-class .vertical-center
        var marginTop = ($(document).height() - $('#gameoverScreen div').height()) / 2;
        $('#gameoverScreen div.wrapper').css('marginTop', marginTop);
    };

    /**
     * adds shop screen
     */
    Level.prototype.showShopScreen = function() {
        var self = this;
        var powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        var html = _templates.shopScreen.render({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
        $('div.shopScreen').append(html);
    };

    Level.prototype.updateShopScreen = function() {
        var self = this;
        var powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        var html = _templates.modalContentShopScreen.render({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
        $('#shopModal').empty();
        $('#shopModal').append(html);
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

    /**
     * returns background color for level
     * @returns {number} color as hexdecimal
     */
    Level.prototype.background = function() {
        var current = levels[this.current - 1];
        return current.background;
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
        console.log('level: ' + level);
        if (level == 1) return true;
        level--;
        if (Cookies.get(level + '-success') == "true") {
            //managed level
            if (level <= Powerups.amount()) {
                //powerup exists
                if (Cookies.get('powerup-' + level) == "bought") {
                    //powerup is bought
                    return true;
                } else {
                    //powerup is not bought
                    return false;
                }
            } else {
                //no powerup exist
                return true;
            }
        }
        return false;


    };




    return Level;
})(
    require('../way/Way'),
    require('../protagonist/CollisionDetector'),
    require('../way/obstacles/Obstacle'),
    require('jquery'),
    require('js-cookie'),
    require('./Powerups'),
    require('../protagonist/Protagonist')
);
