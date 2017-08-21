import React, {Component} from 'react';
import Rx from 'rxjs/Rx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {get as LevelModelGet} from '../../models/level.model';
import './level.css';
import DividerComponent from '../../components/divider/divider';
import GameFrameComponent from '../../components/game-frame/game-frame';

class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async onStartPlay() {
        return new Promise(res =>  {
            document.addEventListener('keydown', () => res());
        });
    }

    async componentDidMount() {
        this.levelModel = await LevelModelGet();
        const levelNr = this.props.match.params.level;
        this.levelDoc = await this.levelModel.getByNr(levelNr);

        const canBePlayed = await this.levelDoc.canBePlayed();
        if (canBePlayed) {
            await this.onStartPlay();
            this.play();
        } else {
            console.log('can not be played');
            // no : redirect, alert ..

        }
        document.removeEventListener('keydown');
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
          <MuiThemeProvider>
            <div className="level">
              <div className="intro">
                <h1>Nirania</h1>
                <h3>Level {this.props.match.params.level}</h3>
                <RaisedButton label="Play" primary={true} />
              </div>
              <DividerComponent ref={instance => this.dividerComponent = instance}/>
              <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level}/>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default LevelPage;
