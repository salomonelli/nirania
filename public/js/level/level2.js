module.exports = (function(){
    var level = {
        level: 2,
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
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 500
                    },
                    color: 0xffffff,
                    position: {
                        distance: 500,
                        angle: 90
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: 0x000000,
                    position: {
                        distance: 500,
                        angle: 180
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 500
                    },
                    color: 0xffffff,
                    position: {
                        distance: 500,
                        angle: 270
                    }
                }
            ]
        }
    };

    return level;
})();