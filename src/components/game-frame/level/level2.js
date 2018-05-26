import Color from '../color';
let boxColor = Color.palette[5].box;
let boxColor2 = Color.palette[5].box2;
let ringColor = Color.palette[5].ring;
const level = {
    author: 'salomonelli',
    id: 2,
    speed: 1,
    instruction: 'Collect diamonds <i class="fa fa-diamond" aria-hidden="true"></i> and try to avoid obstacles.',
    background: Color.palette[5].background,
    requiredDiamonds: 0,
    way: {
        length: 4000,
        color: Color.palette[5].way,
        obstacles: [
            // ring of diamonds
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 30
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 120
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 150
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 210
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 240
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 300
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 360
                }
            },
            // ring of diamonds
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 15
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 75
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 105
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 165
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 195
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 255
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 285
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 345
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 600,
                    angle: 15
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
                    distance: 1500
                }
            },
            // boxes
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 900,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 0
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 900,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 90
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 900,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 900,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
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
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 90
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
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
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 45
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 135
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 225
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 500
                },
                color: boxColor2,
                position: {
                    distance: 2200,
                    angle: 315
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 2500
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 2600
                }
            },

        ]
    }
};

export default level;
