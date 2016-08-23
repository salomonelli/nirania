module.exports = (function(UTIL, COLOR) {
    var boxColor = COLOR.palette[1].box;
    var diamondColor = 0xffffff;
    var level = {
        level: 1,
        speed: 1,
        background: COLOR.palette[1].background,
        way: {
            length: 2230,
            color: COLOR.palette[1].way,
            obstacles: [{
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 446,
                        angle: 0
                    }
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1532,
                        angle: 25
                    }
                }, {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 35,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1550,
                        angle: 0
                    }
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
                    type: 'box',
                    size: {
                        width: 25,
                        length: 25,
                        height: 25
                    },
                    color: boxColor,
                    position: {
                        distance: 1973,
                        angle: 230
                    }
                }, {
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
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 300,
                        angle: 40
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 350,
                        angle: 42
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 400,
                        angle: 44
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 450,
                        angle: 46
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 500,
                        angle: 48
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 550,
                        angle: 50
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 700,
                        angle: 270
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 770,
                        angle: 280
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 800,
                        angle: 280
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 950,
                        angle: 280
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1000,
                        angle: 280
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1050,
                        angle: 280
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1225,
                        angle: 30
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1300,
                        angle: 25
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1375,
                        angle: 20
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1450,
                        angle: 15
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1700,
                        angle: 345
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1750,
                        angle: 340
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1800,
                        angle: 335
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 1950,
                        angle: 2
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 2000,
                        angle: 330
                    }
                }, {
                    type: 'diamond',
                    size: {},
                    color: diamondColor,
                    position: {
                        distance: 2050,
                        angle: 330
                    }
                }

            ]
        }
    };
    return level;
})(
    require('../UTIL'),
    require('../COLOR'));
