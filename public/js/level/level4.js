module.exports = (function(UTIL, COLOR){
  var boxColor = COLOR.palette[3].box;
  var ringColor = COLOR.palette[3].ring;
    var level = {
        level: 4,
        speed: 1,
        background: COLOR.palette[3].background,
        way: {
            length: 5230,
            color: COLOR.palette[3].way,
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
                        distance: 350,
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
                        distance: 450,
                        angle: 60
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
                        angle: 260
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
                        angle: 340
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
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1068,
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
                        distance: 1290,
                        angle: 159
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
                        distance: 3100,
                        angle: 43
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 15,
                        length: 5,
                        height: 500
                    },
                    color: boxColor,
                    position: {
                        distance: 2930,
                        angle: 0
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 15,
                        length: 5,
                        height: 500
                    },
                    color: boxColor,
                    position: {
                        distance: 2730,
                        angle: 90
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 15,
                        length: 5,
                        height: 500
                    },
                    color: boxColor,
                    position: {
                        distance: 2730,
                        angle: 180
                    }
                },
                {
                    type: 'box',
                    size: {
                        width: 15,
                        length: 5,
                        height: 500
                    },
                    color: boxColor,
                    position: {
                        distance: 2730,
                        angle: 270
                    }
                },



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
                }



            ]
        }
    };

    return level;
})(
  require('../UTIL'),
  require('../COLOR')
);
