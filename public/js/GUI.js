module.exports = (function($) {
    var _templates = {
        successScreen: require('./templates/success.mustache'),
        gameoverScreen: require('./templates/gameover.mustache'),
        shopScreen: require('./templates/shop.mustache'),
        modalContentShopScreen: require('./templates/shopModalContent.mustache')
    };

    function GUI() {}

    /**
     * updates amount of diamonds in scoreboard
     * @param {number} diamonds
     */
    GUI.setDiamondsInScoreBoard = function(diamonds) {
        $('.scores .diamonds span').html(diamonds);
    };

    /**
     * shows screen on successful end of level
     * @param {Object} obj - obj to render template successScreen
     */
    GUI.showSuccessScreen = function(obj) {
        var html = _templates.successScreen.render(obj);
        $('body').append(html);
    };

    /**
     * shows screen on game over
     * @param {Object} obj - obj to render template gameoverScreen
     */
    GUI.showGameOverScreen = function(obj) {
        var html = _templates.gameoverScreen.render(obj);
        $('body').append(html);
    };

    /**
     * renders modal for shop screen
     * @param {Object} - render object
     */
    GUI.fillShopModal = function(obj) {
        return _templates.modalContentShopScreen.render(obj);
    };

    /**
     * renders shop screen and adds it
     * @param {Object} - render object
     */
    GUI.showShopScreen = function(obj) {
        var html = _templates.shopScreen.render({
            content: GUI.fillShopModal(obj)
        });
        $('div.shopScreen').append(html);
    };

    /**
     * updates shop shopScreen
     * @param {Object} - render Object
     */
    GUI.updateShopScreen = function(obj) {
        var html = _templates.modalContentShopScreen.render(obj);
        $('#shopModal').empty();
        $('#shopModal').append(html);
    };

    /**
     * fades in game name
     */
    GUI.startingAnimationFadeIn = function(){
          $('.game-name').fadeIn(3000);
          $('.intro').fadeIn(3000);
    };

    /**
     * fades out game name
     * @param {number} fadeTime - in milliseconds
     */
    GUI.startingAnimationFadeOut = function(fadeTime) {
        $('.game-name').fadeOut(fadeTime);
        $('.intro').fadeOut(fadeTime);
    };

    /**
     * shows loading icon
     */
    GUI.showLoadingIcon = function() {
        var height = $('.sk-folding-cube').height() + $('.loading p').height();
        $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
    };

    /**
     * removes loading icon
     */
    GUI.removeLoadingIcon = function() {
        $(".sk-folding-cube").remove();
        $(".loading p").remove();
        var fadeTime = 3000;
        $(".loading").fadeOut(fadeTime);
    };

    /**
     * checks if button is enabled
     * @param {$} button
     * @returns {boolean} - true if button is enabled
     */
    GUI.buttonIsEnabled = function(button) {
        if (button.hasClass('disabled')) return false;
        return true;
    };

    /**
     * gets powerup id from button
     * @param {Object} e - event
     * @returns {number} - powerup id
     */
    GUI.getPowerupIdFromButton = function(e) {
        return e.target.id.replace('buy-powerup-', '');
    };

    /**
     * updates next-level-button in success screen
     */
    GUI.updateNextLevelButton = function() {
        if ($('.button.success.reload').length) {
            $('.button.success.reload').removeClass('disabled');
            $('.callout.alert').remove();
        }
    };

    /**
     * fades in intro slide show
     */
    GUI.introFadeIn = function(){
      $('.blackOverlay').fadeOut(1000);
    };

    /**
     * updates distance in scoreboard
     * @param {number} distance
     */
    GUI.updateDistance = function(distance){
      $('.scores .distance span').html(distance);
    };

    /**
     * fades in scoreboard
     */
    GUI.fadeInScoreboard = function(){
      $('.scores').fadeIn(1000);
    };

    /**
     * fades in soundswitch
     */
    GUI.fadeInSoundSwitch = function(){
      $('.sound').fadeIn(1000);
    };

    /**
     * returns whether sound is on or not
     * @returns {boolean} - true if sound is enabled
     */
    GUI.getSoundSwitch = function(){
      if($('#soundSwitch').is(':checked')) return true;
      return false;
    };


    return GUI;
})(
    require('jquery')
);
