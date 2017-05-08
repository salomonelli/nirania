import React, {Component} from 'react';
import {get as LevelModelGet} from '../../models/level.model';
import './level.css';

import DividerComponent from '../../components/divider/divider';
import GameFrameComponent from '../../components/game-frame/game-frame';

class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        this.levelModel = await LevelModelGet();
        const levelNr = this.props.match.params.level;
        this.levelDoc = await this.levelModel.getByNr(levelNr);

        const canBePlayed = await this.levelDoc.canBePlayed();
        if (canBePlayed) {
            this.play();
        } else {
            console.log('can not be played');
            // no : redirect, alert ..

        }
    }

    async play() {
        this.dividerComponent.open();
        const playStatus$ = this.gameFrameComponent.startGame();
        const levelNr = this.props.match.params.level;
        playStatus$
        .filter(obj => obj.complete)
        .subscribe(async (currentValue) => {
            this.dividerComponent.close();
            await this.levelModel.upsertLevel(
                levelNr,
                currentValue.success,
                currentValue.survived,
                currentValue.diamonds
            );
        });
    }


    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h1>Nirania {this.props.match.params.level}</h1>
                <DividerComponent ref={instance => this.dividerComponent = instance}/>
                <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level}/>
            </div>
        );
    }
}

export default LevelPage;
