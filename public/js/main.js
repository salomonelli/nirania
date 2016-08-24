//noinspection JSUnresolvedFunction
module.exports = (function(Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN, Powerups, GUI) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var _mainScene;
    var _level = [{},
        new Level(1),
        new Level(2),
        new Level(3),
        new Level(4),
        new Level(5),
        new Level(6) 
    ];
    var _currentLevel = 1;
    var _URLpath = '';
    window.initMe = 0;

    /**
     * game with intro
     */
    function _gameWithIntro() {
        async.series([
            function setup(next) {
                GUI.startingAnimationFadeIn();
                _mainScene.showIntro();
                _render();
                _addLevel();
                next();
            },
            function waitForAnyKeyPress(next) {
                Keybindings.bind('keydown', _mainScene, function() {
                    Keybindings.unbind('keydown');
                    next();
                });
            },
            function startingAnimation(next) {
                GUI.startingAnimationFadeOut();
                setTimeout(function() {
                    _mainScene.startingAnimation(next);
                }, fadeTime);
            },
            function startGame(next) {
                _startLevel(next);
            },
            function showLevelScreen(next) {
                _showScreen();
            }
        ]);
    }

    /**
     * game begins directly
     */
    function _gameWithoutIntro() {
        _mainScene.simpleIntro();
        _render();
        _addLevel();
        _startLevel(function() {
            _showScreen();
        });
    }

    /**
     * renders game
     */
    function _render() {
        requestAnimationFrame(_render);
        _mainScene.render();
        _mainScene.turn(_level[_currentLevel]);
        TWEEN.update();
    }

    /**
     * adds current level to scene
     */
    function _addLevel() {
        _level[_currentLevel].prepare();
        _mainScene.addLevel(_level[_currentLevel]);
    }

    /**
     * starts current level
     * @param {Function} cb - callback function called when level is done
     */
    function _startLevel(cb) {
        Keybindings.bind('keydown', _mainScene, Scene.startMovingProtagonist);
        Keybindings.bind('keyup', _mainScene, Scene.stopMovingProtagonist);
        //start moving way
        _mainScene.move.continue = true;
        _level[_currentLevel].begin(function() {
            //level done
            _mainScene.move.continue = false;
            Keybindings.unbind('keydown');
            Keybindings.unbind('keyup');
            cb();
        }, _mainScene.getProtagonist());
    }

    /**
     * shows gameover or successcreen at the end of the level and updates Cookies
     */
    function _showScreen() {
        if (!_level[_currentLevel].gameOver) {
            //success
            _level[_currentLevel].setCookie(true);
            _level[_currentLevel].showSuccessScreen();
        } else {
            //gameover
            _level[_currentLevel].setCookie(false);
            _level[_currentLevel].showGameOverScreen();
        }
    }

    /**
     * checks whether level is allowed to be played, if yes return true
     * @param {number} level
     * @returns {boolean}
     */
    function _playThisLevel() {
        if (_currentLevel === 1) return true;
        return Level.canBePlayed(_currentLevel);
    }

    /**
     * main function for /game
     */
    var _main = function() {
        var URL = window.location.href;
        _URLpath = URL.replace(/http:\/\/.+\//g, '');
        if (_URLpath !== "game") _currentLevel = _URLpath.replace('game#', '');
        GUI.showLoadingIcon();
        Protagonist.init(function() {
            var background = _level[_currentLevel].background();
            _mainScene = new Scene(window.innerWidth, window.innerHeight, background);
            document.body.appendChild(_mainScene.renderer.domElement);
            GUI.removeLoadingIcon();
            if (_playThisLevel()) {
                _gameWithoutIntro();
            } else {
                currentLevel = 1;
                _URLpath = "game";
                _gameWithIntro();
            }
        });
    };

    /**
     * main function of /
     */
    var _intro = function() {
        GUI.introFadeIn();
    };

    //reloads page
    $(document).on('click', '.button.reload', function() {
        location.reload();
    });

    //buys powerup on click
    $(document).on('click', '.powerup .button', function(event) {
        if (GUI.buttonIsEnabled($(this))) {
            var powerup = GUI.getPowerupIdFromButton(event);
            var total = Powerups.buy(powerup);
            _level[_currentLevel].updateShopScreen();
            if (Level.canBePlayed(parseInt(_currentLevel) + 1)) GUI.updateNextLevelButton();
        }
    });

    //store functions to window
    window.intro = _intro;
    window.main = _main;

})(
    require('./Scene'),
    require('jquery'),
    require('three'),
    require('async'),
    require('./protagonist/Protagonist'),
    require('./level/Level'),
    require('./Keybindings'),
    require('tween.js'),
    require('./level/Powerups'),
    require('./GUI')
);
