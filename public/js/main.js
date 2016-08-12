//noinspection JSUnresolvedFunction
module.exports = (function (Scene, $, THREE) {

    //because some three js modules need a global THREE-variable....
    window.THREE = THREE;


    var mainScene;
    window.initMe = 0;

    var main = function () {
        //align loading icon
        var height = $('.sk-folding-cube').height() + $('.loading p').height();
        var windowHeight = window.innerHeight;
        $('.sk-folding-cube').css('marginTop', (windowHeight - height) / 2);

        //load intro
        $(window).on('init', function(){
            window.initMe--;
            if(window.initMe <= 0){
                intro();
            }
        });


        function intro() {
            mainScene = new Scene(window.innerWidth, window.innerHeight);
            mainScene.intro();
            $(".sk-folding-cube").remove();
            $(".loading p").remove();
            $(".loading").fadeOut(3000);
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            //TWEEN.update();
            //Wall.prototype.wallMove(5);
            mainScene.render();
        }

        document.addEventListener('keydown', function (event) {
            var code = event.keyCode;
            switch (code) {
                case 32 :
                    //jump();
                    mainScene.startGame();
                    break;
            }
        });
    };


    window.main = main;

})(
    require('./Scene'),
    require('jquery'),
    require('three')
)
;



