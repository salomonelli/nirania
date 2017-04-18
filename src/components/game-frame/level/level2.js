import Color from '../color';
import * as Util from '../util';
let boxColor = Color.palette[5].box;
const level2 = {
    level: 2,
    speed: 1,
    instruction: 'Collect diamonds <i class="fa fa-diamond" aria-hidden="true"></i> and try to avoid obstacles.',
    background: Color.palette[5].background,
    requiredDiamonds: 5,
    way: {
        length: 2000,
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
            // boxes
            {
                type: 'box',
                size: {
                    width: 50,
                    length: 800,
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
                    width: 50,
                    length: 800,
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
                    width: 50,
                    length: 800,
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
                    width: 50,
                    length: 800,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 270
                }
            },
            // diamonds at 45°
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1200,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1400,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1500,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1600,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1700,
                    angle: 45
                }
            },
            // diamonds at 135°
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1200,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1400,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1500,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1600,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1700,
                    angle: 135
                }
            },
            // diamonds at 225°
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1200,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1400,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1500,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1600,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1700,
                    angle: 225
                }
            },
            // diamonds 315 °
            {
                type: 'diamond',
                position: {
                    distance: 1100,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1200,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1400,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1500,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1600,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1700,
                    angle: 315
                }
            },

        ]
    }
};

export default level2;
