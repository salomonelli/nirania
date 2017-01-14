const $ = require('jquery');
/**
 * handles key events
 */

export class Keybindings{
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
   * @param {string} e - like 'keydown'
   * @param {Scene} scene
   * @param {function()} doSomething - should be called on key event
   */
  static keyBind(e, scene, doSomething) {
    let keyHandler = function keyHandler(event) {
          let direction = Keybindings.handleKeyCode(event.keyCode);
          doSomething(scene, direction);
      };
      $(document).bind(e, keyHandler);
  }

  /**
   * Unbinds a given event from document
   * @param {string} event - like 'keydown'
   */
  static unbind(event) {
      $(document).unbind(event);
  }
};
