//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN, Powerups, GUI) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var _mainScene;
    var _level = [
        {},
        new Level(1, 1),
        new Level(2, 1),
        new Level(3, 1),
        new Level(4, 1),
        new Level(5, 1)
    ];
    var _currentLevel = 1;
    var _URLpath = '';
    window.initMe = 0;

    function gameWithIntro(){
        async.series([
            function setup(next){
                $('.game-name').fadeIn(3000);
                $('.intro').fadeIn(3000);
                _mainScene.showIntro();
                render();
                addLevel();
                next();
            },
            function waitForAnyKeyPress(next){
                Keybindings.bind('keydown', _mainScene, function () {
                    Keybindings.unbind('keydown');
                    next();
                });
            },
            function startingAnimation(next){
                var fadeTime = 1000;
                $('.game-name').fadeOut(fadeTime);
                $('.intro').fadeOut(fadeTime);
                setTimeout(function () {
                    _mainScene.startingAnimation(next);
                }, fadeTime);
            },
            function startGame(next){
                startLevel(next);
            },
            function showLevelScreen(next){
                showScreen();
            }
        ]);
    }

    function gameWithoutIntro(){
        _mainScene.simpleIntro();
        render();
        addLevel();
        startLevel(function(){
            showScreen();
        });
    }

    /**
     * renders game
     */
    function render() {
        requestAnimationFrame(render);
        _mainScene.render();
        _mainScene.turn(_level[_currentLevel]);
        TWEEN.update();
    }

    /**
     * adds current level to scene
     */
    function addLevel() {
        _level[_currentLevel].prepare();
        _mainScene.addLevel(_level[_currentLevel]);
    }

    /**
     * starts current level
     * @param {Function} cb - callback function called when level is done
     */
    function startLevel(cb) {
        Keybindings.bind('keydown', _mainScene, Scene.startMovingProtagonist);
        Keybindings.bind('keyup', _mainScene, Scene.stopMovingProtagonist);

        //start moving way
        _mainScene.move.continue = true;
        _level[_currentLevel].begin(function () {
            //level done
            _mainScene.move.continue = false;
            Keybindings.unbind('keydown');
            Keybindings.unbind('keyup');
            cb();
        }, _mainScene.getProtagonist());
    }

    function showScreen() {
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
    function playThisLevel() {
        if(_currentLevel===1){
            return true;
        }else{
            return Level.canBePlayed(_currentLevel);
        }
    }

    var main = function () {
        var URL = window.location.href;
        _URLpath = URL.replace(/http:\/\/.+\//g, '');
        if(_URLpath !== "game"){
            _currentLevel = _URLpath.replace('#','');
        }
        //show loading icon
        var height = $('.sk-folding-cube').height() + $('.loading p').height();
        $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
        Protagonist.init(function(){
            var background = _level[_currentLevel].background();
            _mainScene = new Scene(window.innerWidth, window.innerHeight, background);
            document.body.appendChild(_mainScene.renderer.domElement);
            //remove loading icon
            $(".sk-folding-cube").remove();
            $(".loading p").remove();
            var fadeTime = 3000;
            $(".loading").fadeOut(fadeTime);
            if(_URLpath){
                if(playThisLevel()){
                    gameWithoutIntro();
                }else{
                    alert('level may not be played');
                }
            }else{
                gameWithIntro();
            }
        });


    };

    $(document).on('click', '.button.reload', function () {
        location.reload();
    });

    $(document).on('click', '.powerup .button', function(event){
      if(!$(this).hasClass('disabled')){
        var powerup = event.target.id.replace('buy-powerup-', '');
        var total =  Powerups.buy(powerup);
        _level[_currentLevel].updateShopScreen();
        if($('.button.success.reload').length){
          if(Level.canBePlayed(parseInt(_currentLevel)+1)){
            $('.button.success.reload').removeClass('disabled');
            $('.callout.alert').remove();
          }
        }
      }
    });

    var intro = function(){
      $('.blackOverlay').fadeOut(1000);
    };

    window.intro = intro;
    window.main = main;

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
