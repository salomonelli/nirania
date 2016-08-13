//require this anywhere
module.exports = (function () {

    function Keybindings() {

    }

    Keybindings.eval = function (code) {
        switch (code) {
            case 37:
            case 65:
                return 'left';
                break;
            case 39:
            case 68:
                return 'right';
                break;
        }
    };


    /*

     document.addEventListener('keydown', function (event) {
     var code = event.keyCode;
     switch (code) {
     case 32 :
     //jump();
     mainScene.startGame();
     break;
     }
     });

     */
    return Keybindings;
})();