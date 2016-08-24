module.exports = (function(Cookies) {
    var _powerups = [{
            id: 1,
            description: 'Sister Alice has very wide legs. Free her and you will be able to <b>dodge faster</b>.',
            diamonds: 10,
            img: '/img/powerups/wideleg.jpg'
        },
        {
            id: 2,
            description: 'With his very long legs, Bob can jump very high. To <b>jump higher</b> free him.',
            diamonds: 20,
            img: '/img/powerups/longleg.jpg'
        },
        {
            id: 3,
            description: 'Mother Carol likes her magnet hat. Free her and <b>collecting diamonds</b> will be easier.',
            diamonds: 30,
            img: '/img/powerups/magnet.jpg'
        },
        {
            id: 4,
            description: 'Father Dave is a doc. During a run you can activate him with <i class="fa fa-long-arrow-down" aria-hidden="true"></i>. That will make you <b>invulnerable</b> for a certain distance. ',
            diamonds: 40,
            img: '/img/powerups/invulnerable.jpg'
        }];

    /**
     * Represents powerups
     */
    function Powerups() {}

    /**
     * returns array with all powerups
     * @return {Array} _powerups - array with all powerups
     */
    Powerups.getPowerups = function() {
        return _powerups;
    };

    /**
     * buys powerup according to powerup id
     * @param {number} id - id of powerup
     */
    Powerups.buy = function(id) {
        _powerups.forEach(function(powerup){
          if(powerup.id == id){
            var total = Cookies.get('total');
            Cookies.set('powerup-'+powerup.id, 'bought');
            total -= powerup.diamonds;
            console.log('total: '+total);
            Cookies.set('total', total);
            return total;
          }
        });
    };

    /**
     * checks whether powerup has been bought already
     * @param {boolean} - is true if powerup has been bought
     */
    Powerups.boughtAlready = function(id){
      if(Cookies.get('powerup-'+id) == "bought"){
        return true;
      }else{
        return false;
      }
    };

    Powerups.getPowerupsForTemplate = function(totalDiamonds){
      _powerups.forEach(function(powerup) {
          powerup.disabled = "disabled";
          if (Powerups.boughtAlready(powerup.id)) {
              powerup.disabled = "hidden";
          } else if (powerup.diamonds <= totalDiamonds) {
              powerup.disabled = "";
          }
      });
      return _powerups;
    };

    Powerups.amount = function(){
      return _powerups.length;
    };

    Powerups.amountOfBought = function(){
      var bought = 0;
      for(var i = 1; i <= _powerups.length; i++){
        if(Cookies.get('powerup-'+i) === "bought") bought++;
      }
      return bought;
    };
    return Powerups;
})(
  require('js-cookie')
);
