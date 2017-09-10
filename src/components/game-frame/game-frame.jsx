import React, {Component} from 'react';
import './game-frame.css';
import Rx from 'rxjs/Rx';
import * as Play from './play';

class GameFrameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.subs = [];
        this.running = false;
        this.lastTap = 0;
    }

    async componentDidMount() {
        this.play = Play.byLevelId(this.props.level);
        this.play.renderToDomElement(this.gameFrameDom);
    }

    startGame() {
        const playStatus$ = this.play.start();
        this.listenKeys();
        return playStatus$;
    }

    listenKeys(twoPlayers = false, leftPlayer = null) {
        if (twoPlayers && leftPlayer === null) {
            throw new Error('Leftplayer may not be null.');
        }

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



        const listenKeySub = Rx.Observable
        .fromEvent(window, 'keydown')
        .map(ev => ev.code)
        .map(code => this.play.getActionByKey(code))
        .filter(code => !!code)
        .subscribe(action => this.play.startAction(action));
        this.subs.push(listenKeySub);

        const listenKeyDownSub = Rx.Observable
        .fromEvent(window, 'keyup')
        .map(ev => ev.code)
        .map(code => this.play.getActionByKey(code))
        .filter(code => !!code)
        .subscribe(action => this.play.endAction(action));
        this.subs.push(listenKeyDownSub);
    }

    stopListenKeys() {}

    componentWillUnmount() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    render() {
        return (
            <div className="game-frame-wrapper">
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
