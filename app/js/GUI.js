let $ = require('jquery');
const templates = {
    successScreen: require('./templates/success.mustache'),
    gameoverScreen: require('./templates/gameover.mustache')
};

export let GUI = {
    /**
     * updates amount of diamonds in scoreboard
     * @param {number} diamonds
     */
    setDiamondsInScoreBoard: function(diamonds) {
        $('.scores .diamonds span').html(diamonds);
    },

    /**
     * shows screen on successful end of level
     * @param {Object} obj - obj to render template successScreen
     */
    showSuccessScreen: function(obj) {
        return new Promise(res => {
            let html = templates.successScreen.render(obj);
            $('body').append(html);
            $('#successScreen').fadeIn(1000, res);
        });
    },

    /**
     * shows screen on game over
     * @param {Object} obj - obj to render template gameoverScreen
     */
    showGameOverScreen: function(obj) {
        return new Promise(res => {
            let html = templates.gameoverScreen.render(obj);
            $('body').append(html);
            $('#gameoverScreen').fadeIn(1000, res);
        });
    },

    /**
     * fades in game name
     */
    startingAnimationFadeIn: async function() {
        return new Promise(res => {
            $('.intro-text').fadeIn(1000, res);
        });
    },

    /**
     * fades out game name
     * @param {number} fadeTime - in milliseconds
     */
    startingAnimationFadeOut: function(fadeTime) {
        $('.game-name').fadeOut(fadeTime);
        $('.intro').fadeOut(fadeTime);
    },

    /**
     * shows loading icon
     */
    showLoadingIcon: function() {
        let height = $('.sk-folding-cube').height() + $('.loading p').height();
        $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
    },

    /**
     * removes loading icon
     */
    removeLoadingIcon: function() {
        $('.sk-folding-cube').remove();
        $('.loading p').remove();
        let fadeTime = 3000;
        $('.loading').fadeOut(fadeTime);
    },

    /**
     * checks if button is enabled
     * @param {$} button
     * @returns {boolean} - true if button is enabled
     */
    buttonIsEnabled: function(button) {
        if (button.hasClass('disabled')) return false;
        return true;
    },

    /**
     * updates next-level-button in success screen
     */
    updateNextLevelButton: function() {
        if ($('.button.success.reload').length) {
            $('.button.success.reload').removeClass('disabled');
            $('.callout.alert').remove();
        }
    },

    /**
     * fades in intro slide show
     */
    introFadeIn: function() {
        $('.blackOverlay').fadeOut(1000);
    },

    /**
     * updates distance in scoreboard
     * @param {number} distance
     */
    updateDistance: function(distance) {
        $('.scores .distance span').html(distance);
    },

    /**
     * fades in scoreboard
     */
    fadeInScoreboard: function() {
        $('.scores').fadeIn(1000);
    },

    /**
     * fades in soundswitch
     */
    fadeInSoundSwitch: function() {
        $('.sound').fadeIn(1000);
    },

    /**
     * returns whether sound is on or not
     * @returns {boolean} - true if sound is enabled
     */
    getSoundSwitch: function() {
        if ($('#soundSwitch').is(':checked')) return true;
        return false;
    },

    /**
     * unchecks sound switch
     */
    uncheckSoundSwitch: function() {
        $('#soundSwitch').attr('checked', false);
    },

    /**
     * shows instruction
     * @param  {String} instruction
     */
    showInstruction: function(instruction) {
        $('.instruction span').html(instruction);
        $('.instruction').removeClass('gone');
    },

    /**
     * hides instruction
     */
    hideInstruction: function() {
        $('.instruction').addClass('gone');
    },

    fadeOverlayOut: function() {
        return new Promise(res => $('.overlay').fadeOut(1000, res));
    },

    openDividers: function() {
        return Promise.all(
            ['left', 'right']
            .map(dir => new Promise(res => {
                $('.dividers .' + dir).animate({
                    width: '0'
                }, res);
            }))
        );
    },

    closeDividers: function() {
        return Promise.all(
            ['left', 'right']
            .map(dir => new Promise(res => {
                $('.dividers .' + dir).animate({
                    width: '50%'
                }, () => {
                    setTimeout(res, 1800);
                });
            }))
        );
    }
};;
