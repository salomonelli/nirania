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
    }

    async componentDidMount() {
        this.play = Play.byLevelId(this.props.level);
        this.play.renderToDomElement(this.gameFrameDom);
    }

    startGame() {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        const playStatus$ = this.play.start();
        this.listenKeys();
        return playStatus$;
    }

    listenKeys(twoPlayers = false, leftPlayer = null) {
        if (twoPlayers && leftPlayer === null) {
            throw new Error('Leftplayer may not be null.');
        }
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
        this.subs.forEch(sub => sub.unsubscribe());
    }

    render() {
        return (
            <div className="game-frame" ref={instance => this.gameFrameDom = instance}></div>
        );
    }
}

export default GameFrameComponent;
