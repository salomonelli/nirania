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
                mainScene.intro();
                animate();
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
                console.log('main.startingAnimation()');
                mainScene.startGame(next);
            },
            function startGame(next){
                console.log('main.startGame()');
            }
        ]);


        function animate() {
            requestAnimationFrame(animate);
            //TWEEN.update();
            //Wall.prototype.wallMove(5);
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



