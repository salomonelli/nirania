let Cookies = require('js-cookie');

const audio = {
    hitDiamond: new Audio('/sound/hitDiamond.mp3'),
    hitObstacle: new Audio('/sound/hitObstacle.mp3')
};

/**
 * plays sound
 * @param {String} sound - name of the sound
 */
export function play(sound) {
    audio[sound].currentTime = 0;
    audio[sound].play();
};

/**
 * stops sound
 * @param {String} sound - name of the sound
 */
export function stop(sound) {
    audio[sound].stop();
};

/**
 * checks in cookies whether sound is on
 * @returns {boolean} - true if sound is on
 */
export function isMusicOn() {
    if (Cookies.get('sound') === 'on') return true;
    if (Cookies.get('sound') === 'undefined') {
        _setMusicSettings(true);
        return true;
    }
    return false;
};

/**
 * sets music settings in Cookies
 * @param {boolean} isOn
 */
export function setMusicSettings(isOn) {
    if (isOn) Cookies.set('sound', 'on');
    else Cookies.set('sound', 'off');
}
