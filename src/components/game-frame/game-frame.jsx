import React, {Component} from 'react';
import './game-frame.css';

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
        const play = Play.byLevelId(this.props.level);
        play.renderToDomElement(this.gameFrameDom);

        const playStatus$ = play.start();


        

    }

    startGame() {}

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
