module.exports = (function(){
    var level = {
        level: 3,
        speed: 1,
        way: {
            length: 1000,
            obstacles : [
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: 0xffffff,
                    position: {
                        distance: 500,
                        angle: 0
                    }
                }
            ]
        }
    };

    return level;
})();