module.exports = (function(UTIL, COLOR) {
    var boxColor = COLOR.palette[4].box;
    var ringColor = COLOR.palette[4].ring;
    var coneColor = COLOR.palette[4].cone;
    var level = {
        level: 6,
        speed: 1,
        background: COLOR.palette[4].background,
        way: {
            length: 1000,
            color: COLOR.palette[4].way,
            obstacles: [{
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 400,
                    angle: 0
                }
            }, {
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 500,
                    angle: 0
                }
            }, {
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 600,
                    angle: 0
                }
            }, {
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 700,
                    angle: 0
                }
            }, {
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 800,
                    angle: 0
                }
            }]
        }
    };

    return level;
})(
    require('../UTIL'),
    require('../COLOR')
);
