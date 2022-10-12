import React, { Component } from 'react';
import { ensureNotFalsy } from 'rxdb';
import { filter, fromEvent, map, Subscription } from 'rxjs';
import './game-frame.css';
import { Play, byLevelId } from './play';


class GameFrameComponent extends Component<any, any> {
    public subs: Subscription[] = [];
    public running = false;
    public lastTap = 0;
    public play?: Play;
    public gameFrameDom: HTMLDivElement | null = null;
    public rendered = false;
    constructor(props: any) {
        super(props);
        this.state = {
            pause: false
        };
    }

    async componentDidMount() {
        if (this.rendered) {
            return;
        }
        this.rendered = true;
        this.play = byLevelId(this.props.level);
        this.play.renderToDomElement(ensureNotFalsy(this.gameFrameDom));
    }

    startGame() {
        const playStatus$ = ensureNotFalsy(this.play).start();
        playStatus$.pipe(
            map((state: any) => state.pause)
        ).subscribe((pause: any) => this.setState({ pause }));
        this.listenKeys();
        return playStatus$;
    }

    listenKeys(twoPlayers = false, leftPlayer = null) {
        if (twoPlayers && leftPlayer === null) {
            throw new Error('Leftplayer may not be null.');
        }
        /*
        TODO fix mobile
        const onTouchStartRight = Rx.Observable
        .fromEvent(this.refs.right, 'touchstart')
        .subscribe(() => this.play.startAction('right'));
        this.subs.push(onTouchStartRight);

        const onTouchStartLeft = Rx.Observable
        .fromEvent(this.refs.left, 'touchstart')
        .subscribe(() => this.play.startAction('left'));
        this.subs.push(onTouchStartLeft);

        const onTouchEndLeft = Rx.Observable
        .fromEvent(this.refs.left, 'touchend')
        .subscribe(action => this.play.endAction('left'));
        this.subs.push(onTouchEndLeft);

        const onTouchEndRight = Rx.Observable
        .fromEvent(this.refs.right, 'touchend')
        .subscribe(action => this.play.endAction('right'));
        this.subs.push(onTouchEndRight);

        const doubleTap = Rx.Observable
        .fromEvent(window, 'touchend')
        .subscribe(() => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - this.lastTap;
            if (tapLength < 500 && tapLength > 0) {
                this.play.startAction('up', true);
            }
            this.lastTap = currentTime;
        });
        this.subs.push(doubleTap);
        */


        const listenKeySub = fromEvent(window, 'keydown').pipe(
            map((ev: any) => ev.code),
            map(code => ensureNotFalsy(this.play).getActionByKey(code)),
            filter(code => !!code)
        )
            .subscribe(action => ensureNotFalsy(this.play).startAction(action));
        this.subs.push(listenKeySub);

        const listenKeyDownSub = fromEvent(window, 'keyup').pipe(
            map((ev: any) => ev.code),
            map(code => ensureNotFalsy(this.play).getActionByKey(code)),
            filter(code => !!code)
        ).subscribe(action => ensureNotFalsy(this.play).endAction(action));
        this.subs.push(listenKeyDownSub);
    }

    stopListenKeys() { }

    componentWillUnmount() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    render() {
        return (
            <div className={this.state.pause ? 'game-frame-wrapper pause' :
                'game-frame-wrapper'
            }                >
                <div className="tappable-controls">
                    <div className="left" ref="left"></div>
                    <div className="right" ref="right"></div>
                </div>
                <div className="game-frame" ref={instance => this.gameFrameDom = instance}></div>
            </div>
        );
    }
}

export default GameFrameComponent;
