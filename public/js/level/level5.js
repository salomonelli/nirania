module.exports = (function(UTIL, COLOR){
    var boxColor = COLOR.palette[4].box;
    var ringColor = COLOR.palette[4].ring;
    var coneColor = COLOR.palette[4].cone;
    var level = {
        level: 5,
        speed: 1,
        background: COLOR.palette[4].background,
        way: {
            length: 6230,
            color: COLOR.palette[4].way,
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
                        distance: 450,
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
                        distance: 546,
                        angle: 193
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 35
                    },
                    color: boxColor,
                    position: {
                        distance: 560,
                        angle: 340
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 35
                    },
                    color: boxColor,
                    position: {
                        distance: 660,
                        angle: 193
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
                        distance: 730,
                        angle: 168
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
                        distance: 824,
                        angle: 315
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
                        distance: 863,
                        angle: 71
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
                        distance: 892,
                        angle: 180
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
                        distance: 934,
                        angle: 83
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
                        distance: 970,
                        angle: 120
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
                        distance: 1057,
                        angle: 152
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
                        distance: 1078,
                        angle: 282
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
                        distance: 1162,
                        angle: 37
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
                        distance: 1357,
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
                        distance: 1420,
                        angle: 324
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
                        distance: 1420,
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
                        distance: 1447,
                        angle: 281
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
                        distance: 1457,
                        angle: 310
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
                        distance: 1532,
                        angle: 258
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
                        distance: 1600,
                        angle: 150
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
                        distance: 1600,
                        angle: 200
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
                        width: 5,
                        length: 5,
                        height: 1
                    },
                    color: boxColor,
                    position: {
                        distance: 1721,
                        angle: 9
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
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1973,
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
                        distance: 2000,
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
                        distance: 2750,
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

                //End of Boxes

                {
                    type: 'diamond',
                    position: {
                        distance: 300,
                        angle: 40
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 350,
                        angle: 42
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 400,
                        angle: 44
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 450,
                        angle: 46
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 500,
                        angle: 48
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 550,
                        angle: 50
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
                        angle: 30
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 1300,
                        angle: 25
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 1375,
                        angle: 20
                    }
                },
                {
                    type: 'diamond',
                    position: {
                        distance: 1450,
                        angle: 15
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
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(250,350)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(500,700)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(800,900)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(1050,1200)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(1300,1400)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(1500,1550)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(1650,1750)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(1900,2100)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(2250,2300)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(2690,2710)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(2850,2860)*2
                    }
                },
                {
                    type: 'ring',
                    color: ringColor,
                    position: {
                        distance: UTIL.randomIntInRange(3000,3020)*2
                    }
                },
                // End of Rings

                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4650,
                        angle: 0
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4670,
                        angle: 90
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4690,
                        angle: 180
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4710,
                        angle: 270
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4730,
                        angle: 340
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4750,
                        angle: 70
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4770,
                        angle: 160
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4790,
                        angle: 250
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4810,
                        angle: 320
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4830,
                        angle: 50
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4850,
                        angle: 140
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4870,
                        angle: 230
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4890,
                        angle: 320
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4910,
                        angle: 30
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4930,
                        angle: 120
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4950,
                        angle: 210
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4970,
                        angle: 300
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 4990,
                        angle: 10
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5010,
                        angle: 100
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5030,
                        angle: 190
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5050,
                        angle: 280
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5070,
                        angle: 350
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5090,
                        angle: 60
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5110,
                        angle: 150
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5130,
                        angle: 240
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5150,
                        angle: 330
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5170,
                        angle: 40
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5190,
                        angle: 130
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5210,
                        angle: 220
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5230,
                        angle: 310
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5250,
                        angle: 20
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5270,
                        angle: 110
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5290,
                        angle: 200
                    }
                },
                {
                    type: 'cone',
                    color: coneColor,
                    position: {
                        distance: 5310,
                        angle: 290
                    }
                }
                //End of Cones

            ]
        }
    };

    return level;
})(
    require('../UTIL'),
    require('../COLOR')
);
