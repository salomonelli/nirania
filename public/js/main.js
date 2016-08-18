//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist, Level, Keybindings, TWEEN) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;

    var mainScene;
    var level = [
        {},
        new Level(1)
    ];
    var currentLevel = 1;
    var URLpath = '';
    window.initMe = 0;

    var main = function () {

        async.series([
            function getURL(next) {
                console.log('main.getURL()');
                var URL = window.location.href;
                URLpath = URL.replace(/http:\/\/.+\//g, '');
                next();
            },
            function showLoadingIcon(next) {
                console.log('main.showLoadingIcon()');
                //align loading icon
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
                }else{
                    //load simple intro
                    console.log('main.simpleIntro()');
                    mainScene.simpleIntro();
                    //position the camera properly
                }
                render();
                next();
            },
            function preloadAndAddLevel1(next) {
                if(URLpath === "" || URLpath === "#1"){
                    console.log('main.preloadAndAddLevel1');
                    level[currentLevel].prepare();
                    mainScene.addLevel(level[currentLevel]);
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
                if(URLpath === "" || URLpath === "#1"){
                    console.log('main.startLevel1()');
                    Keybindings.bind('keydown', mainScene, Scene.startMovingProtagonist);
                    Keybindings.bind('keyup', mainScene, Scene.stopMovingProtagonist);
                    //start moving way
                    mainScene.move.continue = true;
                    level[currentLevel].begin(function () {
                        //level done
                        mainScene.move.continue = false;
                        Keybindings.unbind('keydown');
                        Keybindings.unbind('keyup');
                        next();
                    }, mainScene.getProtagonist());
                }else{
                    next();
                }
            },
            function levelOneScreen(next) {
                if(URLpath === "" || URLpath === "#1"){
                    console.log('main.levelOneScreen()');
                    if(!level[currentLevel].gameOver){
                        //success
                        level[currentLevel].showSuccessScreen();
                    }else{
                        //gameover
                    }
                }
                next();
            },
            function levelOneGameOver(next){
                console.log('main.levelOneGameOver()');
                next();
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
    };

    $(document).on('click', '.button.reload', function(){
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



