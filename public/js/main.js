//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var mainScene;
    var level = [
        {},
        new Level(1),
        new Level(2),
        new Level(3)
    ];
    var currentLevel = 1;
    var URLpath = '';
    window.initMe = 0;

    var main = function () {

        async.series([
            function getCurrentLevelFromURL(next) {
                console.log('main.getURL()');
                var URL = window.location.href;
                URLpath = URL.replace(/http:\/\/.+\//g, '');
                next();
            },
            function showLoadingIcon(next) {
                console.log('main.showLoadingIcon()');
                var height = $('.sk-folding-cube').height() + $('.loading p').height();
                $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
                next();
            },
            function initProtagonist(next) {
                console.log('main.initProtagonist()');
                Protagonist.init(next);
            },
            function prepareScene(next) {
                console.log('main.prepareScene()');
                mainScene = new Scene(window.innerWidth, window.innerHeight);
                document.body.appendChild(mainScene.renderer.domElement);
                next();
            },
            function hideLoadingIcon(next) {
                console.log('main.hideLoadingIcon()');
                $(".sk-folding-cube").remove();
                $(".loading p").remove();
                var fadeTime = 3000;
                $(".loading").fadeOut(fadeTime);
                next();
            },
            function showIntro(next) {
                if (URLpath === "") {
                    console.log('main.showIntro()');
                    $('.game-name').fadeIn(3000);
                    $('.intro').fadeIn(3000);
                    mainScene.showIntro();
                } else {
                    //load simple intro
                    console.log('main.simpleIntro()');
                    mainScene.simpleIntro();
                    //position the camera properly
                }
                render();
                next();
            },
            function addLevel1(next) {
                if (playThisLevel(1)) {
                    console.log('main.addLevel1');
                    addLevel();
                }
                next();
            },
            function waitForAnyKeyPress(next) {
                if (URLpath === "") {
                    console.log('main.waitForAnyKeyPress()');
                    Keybindings.bind('keydown', mainScene, function () {
                        Keybindings.unbind('keydown');
                        next();
                    });
                } else {
                    next();
                }
            },
            function startingAnimation(next) {
                if (URLpath === "") {
                    var fadeTime = 1000;
                    $('.game-name').fadeOut(fadeTime);
                    $('.intro').fadeOut(fadeTime);
                    setTimeout(function () {
                        console.log('main.startingAnimation()');
                        mainScene.startingAnimation(next);
                    }, fadeTime);
                } else {
                    next();
                }
            },
            function startLevel1(next) {
                if (playThisLevel(1)) {
                    startLevel(next);
                } else {
                    next();
                }
            },
            function levelOneScreen(next) {
                if (playThisLevel(1)) {
                    console.log('main.levelOneScreen()');
                    showScreen();
                }
                next();
            },
            function addAndStartLevel2(next) {
                if (playThisLevel(2)) {
                    currentLevel = 2;
                    console.log('main.addAndStartLevel2()');
                    addLevel();
                    startLevel(next);
                } else {
                    next();
                }
            },
            function showScreenLevel2(next) {
                if (playThisLevel(2)) {
                    console.log('main.showScreenLevel2()');
                    showScreen();
                } else {
                    next();
                };
            },
            function addAndStartLevel3(next) {
                if (playThisLevel(3)) {
                    currentLevel = 3;
                    console.log('main.addAndStartLevel3()');
                    addLevel();
                    startLevel(next);
                } else {
                    next();
                }
            },
            function showScreenLevel3(next){
                if (playThisLevel(3)) {
                    console.log('main.showScreenLevel2()');
                    showScreen();
                } else {
                    next();
                };
            }
        ]);

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
        function playThisLevel(level) {
            switch (level) {
                case 1:
                    if (URLpath === "" || URLpath === "#1") {
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case 2:
                    if (URLpath === "#2") {
                        Level.canBePlayed(2);
                        return true;
                    }
                    break;
                case 3:
                    if (URLpath === "#3") {
                        Level.canBePlayed(3);
                        return true;
                    }
                    break;
            }
        }
    };

    $(document).on('click', '.button.reload', function () {
        location.reload();
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
    require('tween.js')
);



