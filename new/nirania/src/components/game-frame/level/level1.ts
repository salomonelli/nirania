import { filter, first, map } from 'rxjs';
import Color from '../color';
import { Play } from '../play';
const boxColor = Color.palette[1].box;
const ringColor = Color.palette[1].ring;
const level = {
    id: 1,
    speed: 1,
    author: 'salomonelli',
    instruction: 'Press <kbd>a</kbd> and <kbd>d</kbd> to avoid the obstacle.',
    background: Color.palette[1].background,
    behavior: {
        start: async (play: Play) => {
            // left turn
            await play.playStatus$.pipe(
                map((state: any) => state.position),
                filter((position: any) => position < 2500),
                first()
            ).toPromise();
            play.startAction('pause');
            play.displayExplanation('Hold to turn left', 'left-turn');
            await play.actions$.pipe(
                filter((action: any) => action === 'left'),
                first()
            ).toPromise();
            play.hideExplanation();
            play.startAction('pause');
            // right turn
            await play.playStatus$.pipe(
                map((state: any) => state.position),
                filter((position: any) => position < 2000),
                first()
            ).toPromise();
            play.startAction('pause');
            play.displayExplanation('Hold to turn right', 'right-turn');
            await play.actions$.pipe(
                filter((action: any) => action === 'right'),
                first()
            ).toPromise();
            play.hideExplanation();
            play.startAction('pause');
            // jump
            await play.playStatus$.pipe(
                map((state: any) => state.position),
                filter((position: any) => position < 1500),
                first()
            ).toPromise();
            play.startAction('pause');
            play.displayExplanation('Press to jump', 'jump');
            await play.actions$.pipe(
                filter((action: any) => action === 'up'),
                first()
            ).toPromise();
            play.hideExplanation();
            play.startAction('pause');
            // collect diamonds
            await play.playStatus$.pipe(
                map((state: any) => state.position),
                filter((position: any) => position < 1000),
                first()
            ).toPromise();
            play.startAction('pause');
            play.displayExplanation('Collect diamonds', 'right-left');
            await play.actions$.pipe(
                first()
            ).toPromise();
            play.hideExplanation();
            play.startAction('pause');
        },
        end: (play: any) => { console.log('end'); }
    },
    requiredDiamonds: 0,
    way: {
        length: 3000,
        color: Color.palette[1].way,
        obstacles: [
            {
                type: 'ring',
                color: ringColor,
                position: {
                    distance: 1500
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 45
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 45
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
                    distance: 2100,
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
                    distance: 2000,
                    angle: 135
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
                    distance: 2200,
                    angle: 135
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 180
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 270
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 225
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 315
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2000,
                    angle: 360
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2100,
                    angle: 360
                }
            },
            {
                type: 'diamond',
                position: {
                    distance: 2200,
                    angle: 360
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 200
                },
                color: boxColor,
                position: {
                    distance: 2500,
                    angle: 90
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 200
                },
                color: boxColor,
                position: {
                    distance: 2500,
                    angle: 0
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 200
                },
                color: boxColor,
                position: {
                    distance: 2500,
                    angle: 180
                }
            },
            {
                type: 'box',
                size: {
                    width: 25,
                    length: 25,
                    height: 200
                },
                color: boxColor,
                position: {
                    distance: 2500,
                    angle: 270
                }
            },

        ]
    }
};

export default level;
