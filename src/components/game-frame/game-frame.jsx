import React, {Component} from 'react';
import './game-frame.css';

import * as Protagonist from './protagonist/protagonist';
import * as Level from './level/level';

let initPromise = null;

async function init() {
    if (!initPromise) {
        console.dir(Protagonist);
        initPromise = Promise.all([Protagonist.init()]);
    }
    return initPromise;
}

class GameFrameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await init();
        console.log('levelId: ' + this.props.level);
        // const level = Level.getById(this.props.level);
        // let background = level[currentLevel].backgroundColor;
        // mainScene = new Scene(window.innerWidth, window.innerHeight, background);
        // document.body.appendChild(mainScene.renderer.domElement);
    }

    componentWillUnmount() {}

    render() {
        return (
            <div ref={instance => this.gameFrameDom = instance}></div>
        );
    }
}

export default GameFrameComponent;
