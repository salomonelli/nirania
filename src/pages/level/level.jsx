import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {get as LevelModelGet} from '../../models/level.model';
import './level.css';
import DividerComponent from '../../components/divider/divider';
import GameFrameComponent from '../../components/game-frame/game-frame';

class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            end: false,
            canNotBePlayed: false,
            success: false,
            survived: false,
            diamonds: 0,
            nextLevel: null
        };
    }

    async componentDidMount() {
        this.levelModel = await LevelModelGet();
        const levelNr = this.props.match.params.level;
        this.setState({nextLevel: parseInt(levelNr) + 1});
        this.levelDoc = await this.levelModel.getByNr(levelNr);

        const canBePlayed = await this.levelDoc.canBePlayed();
        if (!canBePlayed) this.setState({canNotBePlayed: true});
        document.addEventListener('keydown', this.play.bind(this));
    }

    async play() {
        document.removeEventListener('keydown', () => {});
        this.setState({playing: true});
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
            this.setState({end: true});
            this.setState({success: currentValue.success});
            this.setState({survived: currentValue.survived});
            this.setState({diamonds: currentValue.diamonds});
        });
    }


    componentWillUnmount() {}

    render() {
        return (
          <MuiThemeProvider>
            <div className="level">
              {this.state.canNotBePlayed &&
                <div className="intro">
                  <h1>can not be played</h1>
                </div>
              }
              {!this.state.canNotBePlayed && !this.state.playing &&
                <div className="intro">
                  <h1>Nirania</h1>
                  <h3>Level {this.props.match.params.level}</h3>
                  <RaisedButton label="Play" primary={true} onClick={this.play.bind(this)}/>
                </div>
              }
              <DividerComponent ref={instance => this.dividerComponent = instance}/>
              <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level}/>
                { this.state.end &&
                  <div className="intro">
                      <p>Success: {this.state.success ? 'true': 'false'}</p>
                      <p>Survived: {this.state.survived ? 'true' : 'false'}</p>
                      <p>Diamonds: {this.state.diamonds}</p>
                      <RaisedButton label={'Level ' + this.state.nextLevel} primary={true} onClick={this.play.bind(this)}/>
                  </div>
                }
            </div>
          </MuiThemeProvider>
        );
    }
}

export default LevelPage;
