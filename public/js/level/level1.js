module.exports = (function(){
    var level = {
        level: 1,
        speed: 1,
        way: {
            length: 1000,
            obstacles : {
                type: 'cube',
                position : {
                    z: 500
                }
            }
        }
    };

    return level;
})();