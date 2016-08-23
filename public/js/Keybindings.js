//require this anywhere
module.exports = (function ($) {

    /**
     * Handles key events
     * @constructor
     */
    function Keybindings() {
    }

    /**
     * Handles key code and returns fitting string like 'left' or 'right'
     * @param {number} code - keycode
     * @returns {string}
     */
    Keybindings.handleKeyCode = function (code) {
        switch (code) {
            case 37:
            case 65:
                return 'left';
            case 39:
            case 68:
                return 'right';
            case 32:
            case 87:
            case 38:
                return 'up';
            case 40:
                return 'boost';
            default:
                return 'anyKey';
        }
    };

    /**
     * Binds a given event to document
     * @param {string} e - like 'keydown'
     * @param {Scene} scene
     * @param {function} doSomething - function that should be started when event has been triggered
     */
    Keybindings.bind = function (e, scene, doSomething) {
        var keyHandler = function keyHandler(event) {
            var direction = Keybindings.handleKeyCode(event.keyCode);
            doSomething(scene, direction);
        };
        $(document).bind(e, keyHandler);
    };

    /**
     * Unbinds a given event from document
     * @param {string} event - like 'keydown'
     */
    Keybindings.unbind = function (event) {
        $(document).unbind(event);
    };

    return Keybindings;
})(
    require('jquery')
);
