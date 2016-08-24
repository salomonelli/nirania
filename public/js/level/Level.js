module.exports = (function(Way, CollisionDetector, Obstacle, $, Cookies, Powerups, Protagonist, GUI) {

    var _levels = [
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
        this.opacityHelper = -375;
    }

    /**
     * generates and positions meshes for the current level
     */
    Level.prototype.prepare = function() {
        var self = this;
        var current = _levels[self.current - 1];
        this.way = new Way(current.way.length, current.speed, current.way.color);

        this.way.addObstacles(current.way.obstacles);

        //var obstacles = Obstacle.prepareForCollisionDetection(this.way.radius, current.way.obstacles);
        this.collisionDetector = new CollisionDetector(this.way.obstacles);

        this.way.position();
    };

    /**
     * calls collision detector and returns true if game needs to be ended
     * @param {THREE.Object3D} protagonist
     * @returns {boolean} - true if gameover (collision with box or ring)
     */
    Level.prototype.checkCollision = function(protagonist) {
        //check whether collision
        this.way.currentPosition.height = protagonist.position.y;
        var collObj = this.collisionDetector.collision(this.way.currentPosition);
        switch (collObj.type) {
            case "box":
            case "ring":
                // no collsion detection, if powerup 4 is active
                if (this.powerupActive && this.powerupActiveDuration - this.powerUpDistance > 0) return false;
                this.gameOver = true;
                return true;
            case "diamond":
                this.hitDiamond(collObj);
                return false;
        }
    };

    /**
     * calls animation functions of protagonist
     * @param {THREE.Object3D} protagonist
     * @param {THREE.Clock} clock
     * @param {number} speedMulti
     */
    Level.prototype.animateProtagonist = function(protagonist, clock, speedMulti) {
        var position = Math.sin(clock.getElapsedTime() * 10) * 1;
        Protagonist.move(protagonist, position);
        if (this.powerupActive && this.powerupActiveDuration - this.powerUpDistance > 0) {
            var opacity = 0.3;
            if(this.opacityHelper >= 0){
              opacity = (0.7/149625)* (this.opacityHelper*this.opacityHelper)+0.3;
            }
            this.opacityHelper += speedMulti;
            Protagonist.makeGroupTransparent(protagonist, opacity);
            this.powerUpDistance += speedMulti;
        }
    };

    /**
     * starts level
     * @param {function} cb - callback function
     * @param {THREE.Object3D} protagonist - group of meshes of protagonist
     */
    Level.prototype.begin = function(cb, protagonist) {
        var self = this;
        //reset diamonds
        self.lastDiamond = null;
        self.diamonds = 0;
        //reset way
        var t = self.way.length - 80;
        var speedMulti = 2;

        var clock = new THREE.Clock(true);
        var animate = function() {
            t -= speedMulti;
            self.animateProtagonist(protagonist, clock, speedMulti);
            self.way.moveForwardTillEnd(self.speed * speedMulti);
            if (t <= 0 || self.checkCollision(protagonist)) {
                cb();
                return;
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
            GUI.setDiamondsInScoreBoard(self.diamonds);
        }
    };

    /**
     * renders hogan tempalte success.mustache and adds it to html-body
     */
    Level.prototype.showSuccessScreen = function() {
        var last = '';
        if (this.current === _levels.length) last = "gone";
        var canNotBePlayed, disableNextLevel;
        if (!Level.canBePlayed(this.current + 1)) {
            canNotBePlayed = "true";
            disableNextLevel = "disabled";
        }
        GUI.showSuccessScreen({
            score: this.diamonds,
            level: this.current,
            next: this.current + 1,
            last: last,
            canNotBePlayed: canNotBePlayed,
            disableNextLevel: disableNextLevel
        });
        this.showShopScreen();
    };

    /**
     * renders hogan template gameover.mustache and adds it to html-body
     */
    Level.prototype.showGameOverScreen = function() {
        GUI.showGameOverScreen({
            score: this.diamonds,
            level: this.current
        });
    };

    /**
     * adds shop screen
     */
    Level.prototype.showShopScreen = function() {
        var self = this;
        var powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        GUI.showShopScreen({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
    };

    Level.prototype.updateShopScreen = function() {
        var self = this;
        var powerups = Powerups.getPowerupsForTemplate(Level.getTotalDiamonds());
        GUI.updateShopScreen({
            total: Level.getTotalDiamonds(),
            powerups: powerups
        });
    };

    /**
     * stores the score and success in cookie
     * @param {boolean} success - whether current level has been ended with success
     */
    Level.prototype.setCookie = function(success) {
        if (Cookies.get(this.current + '-success') !== "true") Cookies.set(this.current + '-success', success);
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
        var current = _levels[this.current - 1];
        return current.background;
    };

    /**
     * returns total amount of diamonds
     * @returns {number}
     */
    Level.getTotalDiamonds = function() {
        return Cookies.get('total');
    };

    /**
     * checks whether the level can be played
     * @param {number} level - that should be played
     * @returns {boolean}
     */
    Level.canBePlayed = function(level) {
        if (level == 1) return true;
        level--;
        if (Cookies.get(level + '-success') == "true") {
            //managed level
            if (level <= Powerups.amount()) {
                //powerup exists
                if(level <= Powerups.amountOfBought()) return true;
                return false;
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
    require('../protagonist/Protagonist'),
    require('../GUI')
);
