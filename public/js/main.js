//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist, Level, Keybindings) {
    "use strict";

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;


    var mainScene;
    var level = {
        one: new Level(1)
    };
    window.initMe = 0;

    var main = function () {


        async.series([
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
                console.log('main.showIntro()');
                $('.game-name').fadeIn(3000);
                $('.intro').fadeIn(3000);
                mainScene.showIntro();
                render();
                next();
            },
            function preloadAndAddLevel1(next){
                console.log('main.preloadAndAddLevel1');
                level.one.prepare();
                mainScene.addLevel(level.one);
                next();
            },
            function waitForAnyKeyPress(next) {
                console.log('main.waitForAnyKeyPress()');
                Keybindings.bind('keydown', mainScene, function(){
                    Keybindings.unbind('keydown');
                    next();
                });
            },
            function startingAnimation(next){
                var fadeTime = 1000;
                $('.game-name').fadeOut(fadeTime);
                $('.intro').fadeOut(fadeTime);
                setTimeout(function(){
                    console.log('main.startingAnimation()');
                    mainScene.startingAnimation(next);
                }, fadeTime);
            },
            function startLevel1(next){
                console.log('main.startLevel1()');
                Keybindings.bind('keydown', mainScene, Scene.startTurning);
                Keybindings.bind('keyup', mainScene, Scene.stopTurning);
                //start moving way
                mainScene.move.continue=true;
                level.one.begin(function(){
                    //level done
                    mainScene.move.continue = false;
                    Keybindings.unbind('keydown');
                    Keybindings.unbind('keyup');
                    next();
                });
            },
            function levelOneSuccessScreen(next){
                console.log('main.levelOneSuccessScreen()');
            }
        ]);

        /**
         * renders game
         */
        function render() {
            requestAnimationFrame(render);
            mainScene.render();
            mainScene.turn();
        }
    };


    window.main = main;

})(
    require('./Scene'),
    require('jquery'),
    require('three'),
    require('async'),
    require('./protagonist/Protagonist'),
    require('./level/Level'),
    require('./Keybindings')
);



