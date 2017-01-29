let $ = require('jquery');
const templates = {
    successScreen: require('./templates/success.mustache'),
    gameoverScreen: require('./templates/gameover.mustache')
};
/**
 * updates amount of diamonds in scoreboard
 * @param {number} diamonds
 */
export function setDiamondsInScoreBoard(diamonds) {
    $('.scores .diamonds span').html(diamonds);
}

/**
 * shows screen on successful end of level
 * @param {Object} obj - obj to render template successScreen
 * @return {Promise} resolves after fadeIn animation
 */
export function showSuccessScreen(obj) {
    return new Promise(res => {
        let html = templates.successScreen.render(obj);
        $('body').append(html);
        $('#successScreen').fadeIn(1000, res);
    });
}

/**
 * shows screen on game over
 * @param {Object} obj - obj to render template gameoverScreen
 */
export function showGameOverScreen(obj) {
    return new Promise(res => {
        let html = templates.gameoverScreen.render(obj);
        $('body').append(html);
        $('#gameoverScreen').fadeIn(1000, res);
    });
}

/**
 * fades in game name
 * @return {Promise} resolves after fadeIn animation
 */
export async function startingAnimationFadeIn() {
    return new Promise(res => {
        $('.intro-text').fadeIn(1000, res);
    });
}

/**
 * fades out game name
 * @param {number} fadeTime - in milliseconds
 */
export function startingAnimationFadeOut(fadeTime) {
    $('.game-name').fadeOut(fadeTime);
    $('.intro').fadeOut(fadeTime);
}

/**
 * shows loading icon
 */
export function showLoadingIcon() {
    let height = $('.sk-folding-cube').height() + $('.loading p').height();
    $('.sk-folding-cube').css('marginTop', (window.innerHeight - height) / 2);
}

/**
 * removes loading icon
 */
export function removeLoadingIcon() {
    $('.sk-folding-cube').remove();
    $('.loading p').remove();
    let fadeTime = 3000;
    $('.loading').fadeOut(fadeTime);
}

/**
 * checks if button is enabled
 * @param {$} button
 * @return {boolean} - true if button is enabled
 */
export function buttonIsEnabled(button) {
    if (button.hasClass('disabled')) return false;
    return true;
}

/**
 * updates next-level-button in success screen
 */
export function updateNextLevelButton() {
    if ($('.button.success.reload').length) {
        $('.button.success.reload').removeClass('disabled');
        $('.callout.alert').remove();
    }
}

/**
 * fades in intro slide show
 */
export function introFadeIn() {
    $('.blackOverlay').fadeOut(1000);
}

/**
 * updates distance in scoreboard
 * @param {number} distance
 */
export function updateDistance(distance) {
    $('.scores .distance span').html(distance);
}

/**
 * fades in scoreboard
 */
export function fadeInScoreboard() {
    $('.scores').fadeIn(1000);
}

/**
 * fades in soundswitch
 */
export function fadeInSoundSwitch() {
    $('.sound').fadeIn(1000);
}

/**
 * returns whether sound is on or not
 * @return {boolean} - true if sound is enabled
 */
export function getSoundSwitch() {
    if ($('#soundSwitch').is(':checked')) return true;
    return false;
}

/**
 * unchecks sound switch
 */
export function uncheckSoundSwitch() {
    $('#soundSwitch').attr('checked', false);
}

/**
 * shows instruction
 * @param  {String} instruction
 */
export function showInstruction(instruction) {
    $('.instruction span').html(instruction);
    $('.instruction').removeClass('gone');
}

/**
 * hides instruction
 */
export function hideInstruction() {
    $('.instruction').addClass('gone');
}

export function fadeOverlayOut() {
    return new Promise(res => $('.overlay').fadeOut(1000, res));
}

export function openDividers() {
    return Promise.all(
        ['left', 'right']
        .map(dir => new Promise(res => {
            $('.dividers .' + dir).animate({
                width: '0'
            }, res);
        }))
    );
}

export function closeDividers() {
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
