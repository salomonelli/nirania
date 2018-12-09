import Color from '../color';
import * as Util from '../util';
let boxColor = Color.palette[2].box;
let ringColor = Color.palette[2].ring;
let coneColor = Color.palette[2].cone;

const level = {
    author: 'salomonelli',
    id: 3,
    speed: 1,
    background: Color.palette[2].background,
    requiredDiamonds: 3,
    way: {
        length: 2500,
        color: Color.palette[2].way,
        obstacles: [
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 0
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 45
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 90
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 135
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 225
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 315
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 360
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 10
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 55
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 100
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 145
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 190
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 235
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 280
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 325
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 600,
                    angle: 370
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 20
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 65
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 110
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 155
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 200
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 245
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 290
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 335
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 30
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 75
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 120
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 165
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 210
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 255
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 300
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 800,
                    angle: 345
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 40
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 85
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 135
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 225
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 315
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 50,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 360
                }
            },
            // ring of diamonds
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 22.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 67.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 112.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 157.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 202.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 247.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 292.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 337.5
                }
            },
            // rings
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 1400
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 1502
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 1601
                }
            },
            // ring of diamonds
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1900,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 22.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 67.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 112.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 157.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 202.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 247.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 292.5
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 337.5
                }
            },
            // boxes
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 0
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 90
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 45
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 135
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 225
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 500,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 2300,
                    angle: 315
                }
            }
        ]
    }
};

export default level;
