//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN, Powerups) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var mainScene;
    var level = [
        {},
        new Level(1, 1),
        new Level(2, 1),
        new Level(3, 1),
        new Level(4, 1)
    ];
    var currentLevel = 1;
    var URLpath = '';
    window.initMe = 0;

    function gameWithIntro(){
        async.series([
            function setup(next){
                $('.game-name').fadeIn(3000);
                $('.intro').fadeIn(3000);
                mainScene.showIntro();
                render();
                addLevel();
                next();
            },
            function waitForAnyKeyPress(next){
                Keybindings.bind('keydown', mainScene, function () {
                    Keybindings.unbind('keydown');
                    next();
                });
            },
            function startingAnimation(next){
                var fadeTime = 1000;
                $('.game-name').fadeOut(fadeTime);
                $('.intro').fadeOut(fadeTime);
                setTimeout(function () {
                    console.log('main.startingAnimation()');
                    mainScene.startingAnimation(next);
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
        mainScene.simpleIntro();
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
        mainScene.render();
        mainScene.turn();
        TWEEN.update();
    }

    /**
     * adds current level to scene
     */
    function addLevel() {
        level[currentLevel].prepare();
        mainScene.addLevel(level[currentLevel]);
    }

    /**
     * starts current level
     * @param {Function} cb - callback function called when level is done
     */
    function startLevel(cb) {
        Keybindings.bind('keydown', mainScene, Scene.startMovingProtagonist);
        Keybindings.bind('keyup', mainScene, Scene.stopMovingProtagonist);
        //start moving way
        mainScene.move.continue = true;
        level[currentLevel].begin(function () {
            //level done

            mainScene.move.continue = false;
            Keybindings.unbind('keydown');
            Keybindings.unbind('keyup');
            cb();
        }, mainScene.getProtagonist());
    }

    function showScreen() {
        if (!level[currentLevel].gameOver) {
            //success
            level[currentLevel].setCookie(true);
            level[currentLevel].showSuccessScreen();
        } else {
            //gameover
            level[currentLevel].setCookie(false);
            level[currentLevel].showGameOverScreen();
        }
    }

    /**
     * checks whether level is allowed to be played, if yes return true
     * @param {number} level
     * @returns {boolean}
     */
    function playThisLevel() {
        if(currentLevel===1){
            return true;
        }else{
            return Level.canBePlayed(currentLevel);
        }
    }

    var main = function () {
        var URL = window.location.href;
        URLpath = URL.replace(/http:\/\/.+\//g, '');
        if(URLpath){
            currentLevel = URLpath.replace('#','');
        }
        //show loading icon
        var height = $('.sk-folding-cube').height() + $('.loading p').height();
        $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
        Protagonist.init(function(){
            mainScene = new Scene(window.innerWidth, window.innerHeight);
            document.body.appendChild(mainScene.renderer.domElement);
            //remove loading icon
            $(".sk-folding-cube").remove();
            $(".loading p").remove();
            var fadeTime = 3000;
            $(".loading").fadeOut(fadeTime);
            if(URLpath){
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
        //$('.total-diamonds span').html('Total: '+total+' <i class="fa fa-diamond" aria-hidden="true"></i>');
        //$(this).addClass("hidden");
        $('div.shopScreen').empty();
        level[currentLevel].showShopScreen();
      }
    });

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
    require('./level/Powerups')
);
