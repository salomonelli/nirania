//require this anywhere
module.exports=(function(){


    document.addEventListener('keydown', function (event) {
        var code = event.keyCode;
        switch (code) {
            case 32 :
                //jump();
                mainScene.startGame();
                break;
        }
    });

})();