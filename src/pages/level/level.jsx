import React, {Component} from 'react';
import Rx from 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {get as LevelModelGet} from '../../models/level.model';
import './level.css';
import DividerComponent from '../../components/divider/divider';
import GameFrameComponent from '../../components/game-frame/game-frame';
import LevelDashboardComponent from '../../components/level-dashboard/level-dashboard';
import LevelEndComponent from '../../components/level-end/level-end';

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
            nextLevel: null,
            gameFrameComponent: () => <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level}/>
        };
    }

    async reset() {
        this.setState( {
            playing: false,
            end: false,
            canNotBePlayed: false,
            success: false,
            survived: false,
            diamonds: 0,
            nextLevel: null,
            autostart: false,
            gameFrameComponent: () => <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level}/>
        });
        await this.componentDidMount();
    }

    async componentDidMount() {
        this.setState({autostart: this.props.location.search.replace('?', '')});
        this.levelModel = await LevelModelGet();
        const levelNr = this.props.match.params.level;
        this.setState({nextLevel: parseInt(levelNr, 10) + 1});
        this.levelDoc = await this.levelModel.getByNr(levelNr);
        const canBePlayed = await this.levelDoc.canBePlayed();
        if (!canBePlayed) this.setState({canNotBePlayed: true});
        if(this.state.autostart) await this.play();
        else {
            Rx.Observable.fromEvent(document, 'keydown')
            .filter(() => this.state.playing === false)
            .first()
            .subscribe(() => this.play());
        }
    }

    async play() {
        document.removeEventListener('keydown', () => {});
        this.setState({playing: true});
        this.dividerComponent.open();
        const playStatus$ = this.gameFrameComponent.startGame();
        const levelNr = this.props.match.params.level;
        playStatus$.subscribe(currentValue => this.setState({diamonds: currentValue.diamonds}));
        playStatus$
        .filter(obj => obj.complete)
        .subscribe(async (currentValue) => {
            const promise1 = this.dividerComponent.close();
            const promise2 = this.levelModel.upsertLevel(
                levelNr,
                currentValue.success,
                currentValue.survived,
                currentValue.diamonds
            );
            await Promise.all([promise1, promise2]);
            console.dir(this.levelEndComponent);
            this.levelEndComponent.startCountDown();
            this.setState({end: true});
            this.setState({success: currentValue.success});
            this.setState({survived: currentValue.survived});
            this.setState({diamonds: currentValue.diamonds});
        });
    }

    async playNextLevel() {
        this.props.history.push('/level/'+this.state.nextLevel);
        await this.reset();
    }
    allLevels() {
        this.props.history.push('/level');
    }


    componentWillUnmount() {}

    render() {
        const CurrentGameFrame = this.state.gameFrameComponent;
        return (
          <MuiThemeProvider>
            <div className="level">
              {this.state.canNotBePlayed &&
                <div className="intro">
                  <h1>can not be played</h1>
                </div>
              }
              {!this.state.canNotBePlayed && !this.state.playing && !this.state.autostart &&
                <div className="intro">
                  <h1>Nirania</h1>
                  <h3>Level {this.props.match.params.level}</h3>
                  <RaisedButton label="Play" primary={true} onClick={this.play.bind(this)}/>
                </div>
              }
              <LevelDashboardComponent diamonds={this.state.diamonds}/>
              <DividerComponent ref={instance => this.dividerComponent = instance}/>
              <CurrentGameFrame />
                  <div className={'intro' + (this.state.end ? '' : ' hidden')}>
                      <LevelEndComponent ref={instance => this.levelEndComponent = instance} nextLevel={this.state.nextLevel} success={this.state.success}
                        onAllLevels={this.allLevels.bind(this)} onNextLevel={this.playNextLevel.bind(this)}
                        onRepeat={this.reset.bind(this)}/>
                  </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default LevelPage;


/*
<RaisedButton label='View Levels' primary={false} onClick={this.allLevels.bind(this)}/>

<p>Success: {this.state.success ? 'true': 'false'}</p>
<p>Survived: {this.state.survived ? 'true' : 'false'}</p>
<p>Diamonds: {this.state.diamonds}</p>
<RaisedButton label='Repeat' primary={false} onClick={this.reset.bind(this)}/>
{
this.state.success &&
<RaisedButton label={'Level ' + this.state.nextLevel} primary={true}
onClick={this.playNextLevel.bind(this)}/>

}
 */
