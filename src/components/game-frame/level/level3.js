import {
    Color
} from '../Color';
import {
    Util
} from '../Util';
let boxColor = Color.palette[2].box;
let ringColor = Color.palette[2].ring;
let coneColor = Color.palette[2].cone;

export let level3 = {
    level: 3,
    speed: 1,
    background: Color.palette[2].background,
    requiredDiamonds: 0,
    way: {
        length: 4230,
        color: Color.palette[2].way,
        obstacles: [{
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 500,
                    angle: 34
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 546,
                    angle: 264
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 300,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 557,
                    angle: 300
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 300,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 557,
                    angle: 0
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 580,
                    angle: 120
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 15,
                    height: 35
                },
                color: boxColor,
                position: {
                    distance: 700,
                    angle: 150
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 760,
                    angle: 210
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 834,
                    angle: 283
                }
            },
            {
                type: 'box',
                size: {
                    width: 50,
                    length: 25,
                    height: 10
                },
                color: boxColor,
                position: {
                    distance: 875,
                    angle: 60
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 900,
                    angle: 170
                }
            },
            {
                type: 'box',
                size: {
                    width: 10,
                    length: 80,
                    height: 50
                },
                color: boxColor,
                position: {
                    distance: 950,
                    angle: 100
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 200,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1060,
                    angle: 190
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1070,
                    angle: 290
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1140,
                    angle: 25
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1150,
                    angle: 137
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1200,
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
                color: boxColor,
                position: {
                    distance: 1290,
                    angle: 159
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 35,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1350,
                    angle: 20
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1450,
                    angle: 350
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1450,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 30
                },
                color: boxColor,
                position: {
                    distance: 1470,
                    angle: 310
                }
            },
            {
                type: 'box',
                size: {
                    width: 20,
                    length: 25,
                    height: 40
                },
                color: boxColor,
                position: {
                    distance: 1475,
                    angle: 110
                }
            },
            {
                type: 'box',
                size: {
                    width: 37,
                    length: 25,
                    height: 60
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 100
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1560,
                    angle: 260
                }
            },
            {
                type: 'box',
                size: {
                    width: 37,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1625,
                    angle: 271
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1635,
                    angle: 206
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 15
                },
                color: boxColor,
                position: {
                    distance: 1721,
                    angle: 19
                }
            },
            {
                type: 'box',
                size: {
                    width: 10,
                    length: 75,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1843,
                    angle: 76
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1900,
                    angle: 279
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1923,
                    angle: 64
                }
            },
            {
                type: 'box',
                size: {
                    width: 15,
                    length: 55,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1973,
                    angle: 320
                }
            },
            {
                type: 'box',
                size: {
                    width: 60,
                    length: 5,
                    height: 40
                },
                color: boxColor,
                position: {
                    distance: 2000,
                    angle: 30
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2046,
                    angle: 295
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2298,
                    angle: 284
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2438,
                    angle: 269
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2567,
                    angle: 170
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2675,
                    angle: 265
                }
            },
            {
                type: 'box',
                size: {
                    width: 5,
                    length: 100,
                    height: 10
                },
                color: boxColor,
                position: {
                    distance: 2679,
                    angle: 310
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2750,
                    angle: 207
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2865,
                    angle: 25
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2964,
                    angle: 333
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 100,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3050,
                    angle: 138
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3100,
                    angle: 43
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3150,
                    angle: 150
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3170,
                    angle: 273
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3200,
                    angle: 150
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3210,
                    angle: 200
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3270,
                    angle: 75
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3300,
                    angle: 145
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3340,
                    angle: 170
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3370,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3375,
                    angle: 140
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {

                    distance: 3400,
                    angle: 220
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
                    angle: 150
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
                    angle: 210
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
                    angle: 270
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
                    angle: 330
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
                    angle: 30
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 300
                },
                color: boxColor,
                position: {
                    distance: 3500,
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
                color: boxColor,
                position: {
                    distance: 3700,
                    angle: 190
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3700,
                    angle: 300
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3750,
                    angle: 150
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3800,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3800,
                    angle: 30
                }
            },
            {
                type: 'box',
                size: {
                    width: 50,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3900,
                    angle: 50
                }
            },
            {
                type: 'box',
                size: {
                    width: 35,
                    length: 25,
                    height: 70
                },
                color: boxColor,
                position: {
                    distance: 3950,
                    angle: 350
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 4000,
                    angle: 90
                }
            },

            {
                type: 'diamond',
                position: {
                    distance: 300,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 350,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 400,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 450,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 500,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 550,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 700,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 770,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 800,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 950,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1000,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1050,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1225,
                    angle: 290
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 290
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1375,
                    angle: 290
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1450,
                    angle: 290
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1700,
                    angle: 345
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1750,
                    angle: 340
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1800,
                    angle: 335
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1950,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2050,
                    angle: 330
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2050,
                    angle: 130
                }
            },

            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2150,
                    angle: 140
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 145
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2250,
                    angle: 150
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2300,
                    angle: 155
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2500,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2550,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2600,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2650,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2750,
                    angle: 310
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2800,
                    angle: 310
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2900,
                    angle: 310
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3000,
                    angle: 310
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3100,
                    angle: 38
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3500,
                    angle: 183
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3600,
                    angle: 192
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3700,
                    angle: 210
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3140,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3240,
                    angle: 50
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3300,
                    angle: 55
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3600,
                    angle: 10
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3650,
                    angle: 10
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3675,
                    angle: 10
                }
            },

            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(250, 350) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(500, 700) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(750, 950) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1050, 1200) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1300, 1400) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1500, 1550) * 2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1900, 2000) * 2
                }
            },

            {
                type: 'cone',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: coneColor,
                position: {
                    distance: 4100,
                    angle: 340
                }
            }


        ]
    }
};
