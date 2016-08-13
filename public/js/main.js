//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE, async, Protagonist) {

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;


    var mainScene;
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
            function waitForAnyKeyPress(next) {
                console.log('main.waitForAnyKeyPress()');
                var keyHandler = function () {
                    $(document).unbind('keydown', keyHandler);
                    next();
                };
                $(document).bind('keydown', keyHandler);
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
            function startGame(next){
                console.log('main.startGame()');
            }
        ]);

        /**
         * renders game
         */
        function render() {
            requestAnimationFrame(render);
            mainScene.render();
        }
    };


    window.main = main;

})(
    require('./Scene'),
    require('jquery'),
    require('three'),
    require('async'),
    require('./protagonist/Protagonist')
);



