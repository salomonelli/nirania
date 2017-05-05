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

        // const play = Play.byLevelId(1);
        // play.renderToDomElement();
        // const play$ = play.start();
        // ...
        //
        //
        // play.pause()

        console.log('levelId: ' + this.props.level);
        this.play = Play.byLevelId(this.props.level);
        this.play.renderToDomElement(this.gameFrameDom);

        const playStatus$ = this.play.start();
        this.listenKeys();
    }

    startGame() {}

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
        .subscribe(action => this.play.startAction(action));
        this.subs.push(listenKeyDownSub);
    }

    stopListenKeys() {}

    componentWillUnmount() {
        this.subs.forEch(sub => sub.unsubscribe());
    }

    render() {
        return (
            <div ref={instance => this.gameFrameDom = instance}></div>
        );
    }
}

export default GameFrameComponent;
