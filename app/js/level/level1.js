import { Color } from '../Color';
import { Util } from '../Util';
let boxColor = Color.palette[1].box;
export let level1 = {
    level: 1,
    speed: 1,
    instruction: 'Press <kbd>a</kbd> and <kbd>d</kbd> to avoid the obstacle.',
    background: Color.palette[1].background,
    requiredDiamonds: 0,
    way: {
        length: 1300,
        color: Color.palette[1].way,
        obstacles: [
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
                    distance: 900,
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
                    distance: 900,
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
                    distance: 900,
                    angle: 270
                }
            }
        ]
    }
};
