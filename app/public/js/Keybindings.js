const $ = require('jquery');
import Rx from 'rxjs/Rx';

/**
 * handles key events
 */
export class Keybindings {
    /**
     * Handles key code and returns fitting string like 'left' or 'right'
     * @param {number} code - keycode
     * @returns {string}
     */
    static handleKeyCode(code) {
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
    }

    /**
     * Binds a given event to document
     * @param {string} ev - like 'keydown'
     * @param {Scene} scene
     * @param {function()} doSomething - should be called on key event
     */
    static keyBind(ev) {
        return Rx.Observable.fromEvent(document, ev)
            .map(ev => Keybindings.handleKeyCode(ev.keyCode));
    }

};
