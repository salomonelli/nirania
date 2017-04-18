import React, {Component} from 'react';
import './game-frame.css';

import * as Protagonist from './protagonist/protagonist';
import * as Level from './level/level';
import * as Scene from './Scene';
import Keybindings from './Keybindings';


class GameFrameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.subs = [];
        this.running = false;
    }

    async componentDidMount() {
        console.log('levelId: ' + this.props.level);
        const level = Level.getById(this.props.level);
        const scene = Scene.create(window.innerWidth, window.innerHeight, level);
        scene.renderToDomElement(this.gameFrameDom);
        scene.simpleIntro();
        scene.addLevel(level);



        scene.move.continue = true;
        this.running = true;
        scene.startUtilEnd();
        level.begin(Protagonist.get());

        // key-handlers
        this.subs.push(Keybindings.keyBind('keydown').subscribe(direction => scene.startMovingProtagonist(direction)));
        this.subs.push(Keybindings.keyBind('keyup').subscribe(direction => scene.stopMovingProtagonist(direction)));

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
