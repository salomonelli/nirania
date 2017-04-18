import Color from '../color';
import * as Util from '../util';
let boxColor = Color.palette[3].box;
let ringColor = Color.palette[3].ring;
let coneColor = Color.palette[3].cone;
export let level4 = {
    level: 4,
    speed: 1,
    background: Color.palette[3].background,
    requiredDiamonds: 0,
    way: {
        length: 4230,
        color: Color.palette[3].way,
        obstacles : [
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 450,
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
                    distance: 450,
                    angle: 230
                }
            },
            {
                type: 'box',
                size: {
                    width: 35,
                    length: 15,
                    height: 300
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
                    width: 35,
                    length: 15,
                    height: 300
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
                    length: 25,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 550,
                    angle: 20
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
                    distance: 700,
                    angle: 40
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
                    distance: 700,
                    angle: 80
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
                    distance: 700,
                    angle: 130
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
                    distance: 720,
                    angle: 220
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
                    distance: 850,
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
                    distance: 950,
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
                    distance: 1075,
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
                    distance: 1050,
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
                    distance: 1080,
                    angle: 240
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
                    distance: 1160,
                    angle: 240
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
                    distance: 1180,
                    angle: 130
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
                    distance: 1350,
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
                    distance: 1350,
                    angle: 175
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
                    distance: 1500,
                    angle: 180
                }
            },

            {
                type: 'box',
                size: {
                    width: 25,
                    length: 400,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 1500,
                    angle: 130
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 400,
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
                    width: 60,
                    length: 25,
                    height: 40
                },
                color: boxColor,
                position: {
                    distance: 1600,
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
                    distance: 1700,
                    angle: 200
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 20
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 80
                }
            },

            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 140
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 200
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 260
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 1800,
                    angle: 320
                }
            },

            {
                type: 'box',
                size: {
                    width: 100,
                    length: 25,
                    height: 35
                },
                color: boxColor,
                position: {
                    distance: 2000,
                    angle: 50
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 250,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 2100,
                    angle: 110
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
                    distance: 2100,
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
                    distance: 2150,
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
                    distance: 2250,
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
                    distance: 2400,
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
                    distance: 2450,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 75,
                    length: 25,
                    height: 50
                },
                color: boxColor,
                position: {
                    distance: 2500,
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
                    distance: 2550,
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
                    distance: 2650,
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
                    distance: 2700,
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
                    distance: 2800,
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
                    distance: 2950,
                    angle: 45
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 10,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3000,
                    angle: 95
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 10,
                    height: 25
                },
                color: boxColor,
                position: {
                    distance: 3050,
                    angle: 120
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
                    distance: 3174,
                    angle: 86
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
                    distance: 3250,
                    angle: 240
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
                    distance: 3260,
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
                    distance: 3400,
                    angle: 120
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
                    angle: 10
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
                    distance: 3500,
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
                    distance: 3500,
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
                    distance: 3600,
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
                    distance: 3650,
                    angle: 155
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 10,
                    height: 100
                },
                color: boxColor,
                position: {
                    distance: 3750,
                    angle: 160
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 4000,
                    angle: 45
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 4000,
                    angle: 135
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 4000,
                    angle: 225
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 400
                },
                color: boxColor,
                position: {
                    distance: 4000,
                    angle: 315
                }
            },



            {
                type: 'diamond',
                position: {
                    distance: 300,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 350,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 400,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 450,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 500,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 550,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 630,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 650,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 680,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 700,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 730,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 750,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 780,
                    angle: 60
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
                    distance: 1150,
                    angle: 15
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1200,
                    angle: 345
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1350,
                    angle: 340
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1300,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1340,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1380,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1420,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1460,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1500,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1550,
                    angle: 110
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 1600,
                    angle: 110
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
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2050,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2150,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 90
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2350,
                    angle: 180
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
                    angle: 170
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
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3650,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3675,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 4050,
                    angle: 25
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 4200,
                    angle: 30
                }
            },


            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 300
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 300
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 300
                }
            },{
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 280
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 260
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 260
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 260
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 240
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 240
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 240
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 220
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 220
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 220
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 200
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 200
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 200
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 160
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 160
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 160
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 140
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 140
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 140
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 120
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 120
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 120
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 100
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 100
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 100
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 80
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 80
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 80
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 60
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 40
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 40
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 40
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 20
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 0
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 340
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 340
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 340
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3800,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3850,
                    angle: 320
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 3900,
                    angle: 320
                }
            },




            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(250,350)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(500,600)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(700,800)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1050,1060)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1300,1320)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1450,1500)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1600,1625)*2
                }
            },
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: Util.randomIntInRange(1900,2100)*2
                }
            },


            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 700,
                    angle: 0
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 1100,
                    angle: 90
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 1500,
                    angle: 180
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 1900,
                    angle: 270
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 2300,
                    angle: 0
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 2700,
                    angle: 90
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 3100,
                    angle: 180
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 3500,
                    angle: 270
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 3900,
                    angle: 0
                }
            },
            {
                type: 'cone',
                color: coneColor,
                position: {
                    distance: 4100,
                    angle: 90
                }
            },

        ]
    }
};
