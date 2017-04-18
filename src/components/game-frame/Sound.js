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
    // TODO add logic
    return true;
};

/**
 * sets music settings
 * @param {boolean} isOn
 */
export function setMusicSettings(isOn) {
    // TODO
}
