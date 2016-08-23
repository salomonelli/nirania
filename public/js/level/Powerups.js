module.exports = (function(Cookies) {
    var _powerups = [{
            id: 1,
            description: "boosts speed",
            diamonds: 10,
            img: "/img/01.jpg"
        },
        {
            id: 2,
            description: "jump higher",
            diamonds: 20,
            img: "/img/02.jpg"
        },
        {
            id: 3,
            description: "diamond magnet",
            diamonds: 30,
            img: "/img/03.jpg"
        },
        {
            id: 4,
            description: "invulnerable",
            diamonds: 40,
            img: "/img/04.jpg"
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
    return Powerups;
})(
  require('js-cookie')
);
