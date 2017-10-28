import Color from '../color';
const boxColor = Color.palette[1].box;
const level = {
    id: 1,
    speed: 1,
    author: 'salomonelli',
    instruction: 'Press <kbd>a</kbd> and <kbd>d</kbd> to avoid the obstacle.',
    background: Color.palette[1].background,
    behavior: {
        start: play => {
            let jumpInfo = false;
            play.playStatus$.map(state => state.position)
            .do(position => console.log(position))
            .filter(() => jumpInfo === false)
            .filter(position => position < 1500)
            .subscribe(position => {
                console.log('aaaaaaaaaaa');
                jumpInfo = true;
                play.startAction('pause');
                play.displayExplanation('Hold to turn left', 'left-turn');
            });
        },
        end: play => { console.log('end');}
    },
    requiredDiamonds: 0,
    way: {
        length: 2000,
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
                    distance: 1500,
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
                    distance: 1500,
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
                    distance: 1500,
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
                    distance: 1500,
                    angle: 270
                }
            }
        ]
    }
};

export default level;
