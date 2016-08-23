module.exports = (function($){
  var _templates = {
      successScreen: require('./templates/success.mustache'),
      gameoverScreen: require('./templates/gameover.mustache'),
      shopScreen: require('./templates/shop.mustache'),
      modalContentShopScreen: require('./templates/shopModalContent.mustache')
  };

  function GUI(){}

  /**
   * updates amount of diamonds in scoreboard
   * @param {number} diamonds
   */
  GUI.setDiamondsInScoreBoard = function(diamonds){
    $('.scores .diamonds span').html(diamonds);
  };

  /**
   * shows screen on successful end of level
   * @param {Object} obj - obj to render template successScreen
   */
  GUI.showSuccessScreen = function(obj){
    var html = _templates.successScreen.render(obj);
    $('body').append(html);
  };

  /**
   * shows screen on game over
   * @param {Object} obj - obj to render template gameoverScreen
   */
  GUI.showGameOverScreen = function(obj){
    var html = _templates.gameoverScreen.render(obj);
    $('body').append(html);
  };

  GUI.fillShopModal = function(obj){
    return _templates.modalContentShopScreen.render(obj);
  };

  GUI.showShopScreen = function(obj){
    var html = _templates.shopScreen.render({
      content: GUI.fillShopModal(obj)
    });
    $('div.shopScreen').append(html);
  };

  GUI.updateShopScreen = function(obj){
    var html = _templates.modalContentShopScreen.render(obj);
    $('#shopModal').empty();
    $('#shopModal').append(html);
  };

  return GUI;
})(
  require('jquery')
);
