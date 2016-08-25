module.exports = (function(Cookies) {
    var _audio = {
        hitDiamond: new Audio('/sound/hitDiamond.mp3'),
        hitObstacle: new Audio('/sound/hitObstacle.mp3')
    };

    function Sound() {}

    /**
     * plays sound
     * @param {String} sound - name of the sound
     */
    Sound.play = function(sound) {
        _audio[sound].currentTime = 0;
        _audio[sound].play();
    };

    /**
     * stops sound
     * @param {String} sound - name of the sound
     */
    Sound.stop = function(sound){
      _audio[sound].stop();
    };

    /**
     * checks in cookies whether sound is on
     * @returns {boolean} - true if sound is on
     */
    Sound.isMusicOn = function(){
      if(Cookies.get('sound') === "on" ) return true;
      if(Cookies.get('sound') === "undefined"){
        _setMusicSettings(true);
        return true;
      }
      return false;
    };

    /**
     * sets music settings in Cookies
     * @param {boolean} isOn
     */
    Sound.setMusicSettings = function(isOn){
      if (isOn) Cookies.set('sound', 'on');
      else Cookies.set('sound', 'off');
    };

    return Sound;
})(
  require('js-cookie')
);
