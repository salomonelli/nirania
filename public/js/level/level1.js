module.exports = (function(){
    var level = {
        level: 1,
        speed: 1,
        way: {
            length: 1000,
            obstacles : [
                {
                    type: 'box',
                    size: {
                        x: 25,
                        y: 25,
                        z: 25
                    },
                    color: 0xffffff,
                    position: {
                        distance: 600,
                        angle: 0
                    }
                },
                {
                    type: 'box',
                    size: {
                        x: 25,
                        y: 25,
                        z: 25
                    },
                    color: 0x000000,
                    position: {
                        distance: 500,
                        angle: 90
                    }
                }
                ,
                {
                    type: 'box',
                    size: {
                        x: 25,
                        y: 25,
                        z: 25
                    },
                    color: 0x000000,
                    position: {
                        distance: 300,
                        angle: -20
                    }
                },
                {
                    type: 'box',
                    size: {
                        x: 25,
                        y: 25,
                        z: 25
                    },
                    color: 0x000000,
                    position: {
                        distance: 700,
                        angle: -30
                    }
                }
            ]
        }
    };

    return level;
})();