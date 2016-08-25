//noinspection JSUnresolvedFunction
module.exports = (function(Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN, Powerups, GUI, Cookies) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var _mainScene;
    var _level = [{},
        new Level(1),
        new Level(2),
        new Level(3),
        new Level(4),
        new Level(5)
    ];
    var _currentLevel = 1;
    var _URLpath = '';
    window.initMe = 0;

    var _music = new Audio('/sound/music.mp3');

    if (_isMusicOn()) _music.play();
    else GUI.uncheckSoundSwitch();

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
                var fadeTime = 1000;
                GUI.startingAnimationFadeOut(fadeTime);
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
        GUI.fadeInScoreboard();
        GUI.fadeInSoundSwitch();
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
     * checks in cookies whether sound is on
     * @returns {boolean} - true if sound is on
     */
    function _isMusicOn() {
        if (Cookies.get('sound') === "on") return true;
        if (Cookies.get('sound')) {
            _level[_currentLevel].playSound = false;
            return false;
        }
        _setMusicSettings(true);
        return true;

    }

    /**
     * sets music settings in Cookies
     */
    function _setMusicSettings(isOn) {
        if (isOn) Cookies.set('sound', 'on');
        else Cookies.set('sound', 'off');
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
            if (_URLpath == "game") {
                _gameWithIntro();
            } else {
                if (_playThisLevel()) {
                    _gameWithoutIntro();
                } else {
                    var newURL = URL.replace(_URLpath, 'game');
                    window.location.href = newURL;
                }
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

    //enables and disables sound
    $(document).on('click', '#soundSwitch', function(event) {
        _level[_currentLevel].playSound = GUI.getSoundSwitch();
        _setMusicSettings(_level[_currentLevel].playSound);
        if (_level[_currentLevel].playSound) _music.play();
        else _music.pause();
    });

    //resets cookies to play game from start
    $(document).on('click', '#playagain', function(event) {
        var object = Cookies.get();
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                Cookies.remove(property);
            }
        }
    });

    _music.addEventListener('ended', function() {
        if (_level[_currentLevel].playSound) {
            this.currentTime = 0;
            this.play();
        }
    }, false);

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
    require('./GUI'),
    require('js-cookie')
);
