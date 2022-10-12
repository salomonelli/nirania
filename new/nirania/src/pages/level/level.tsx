/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { filter, fromEvent } from 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { get as LevelModelGet } from '../../models/level.model';
import './level.css';
import DividerComponent from '../../components/divider/divider';
import GameFrameComponent from '../../components/game-frame/game-frame';
import LevelDashboardComponent from '../../components/level-dashboard/level-dashboard';
import CheaterComponent from '../../components/cheater/cheater';
import LevelEndComponent from '../../components/level-end/level-end';
import ExplanationComponent from '../../components/explanation/explanation';
import { withRouter } from 'react-router-dom';
import { ensureNotFalsy } from 'rxdb';


class LevelPage extends Component<any> {
    constructor(props: any) {

        console.log('level.tsx props:');
        console.dir(props);
        super(props);
        this.state = {
            playing: false,
            end: false,
            canNotBePlayed: false,
            pause: false,
            success: false,
            survived: false,
            diamonds: 0,
            nextLevel: null,
            gameFrameComponent: () => <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level} />
        };
    }
    state: any;
    gameFrameComponent: GameFrameComponent | null = null;
    levelModel: any;
    levelDoc: any;
    dividerComponent: any;
    explanationComponent: any;
    levelEndComponent: any;
    public rendered = false;

    async reset() {
        if (!this.state.end) return;
        this.rendered = false;
        this.setState({
            playing: false,
            end: false,
            canNotBePlayed: false,
            autostart: true,
            success: false,
            survived: false,
            diamonds: 0,
            nextLevel: null,
            gameFrameComponent: () => <GameFrameComponent ref={instance => this.gameFrameComponent = instance} level={this.props.match.params.level} />
        });
        await this.componentDidMount();
    }

    async componentDidMount() {
        if (this.rendered) {
            return;
        }
        this.rendered = true;

        fromEvent(window, 'resize')
            .subscribe(() => location.reload());
        if (!!this.state.autostart) {
            this.setState({ autostart: this.props.location.search.replace('?', '') });
        }
        this.levelModel = await LevelModelGet();
        const levelNr = this.props.match.params.level;
        this.setState({ nextLevel: parseInt(levelNr, 10) + 1 });
        this.levelDoc = await this.levelModel.getByNr(levelNr);
        const canBePlayed = await this.levelDoc.canBePlayed();
        if (!canBePlayed) {
            this.setState({ canNotBePlayed: true });
        }
        else {
            await this.play();
        }
        /*
        if(this.state.autostart) await this.play();
        else {
            Rx.Observable.fromEvent(document, 'keydown')
            .filter(() => this.state.playing === false)
            .first()
            .subscribe(() => this.play());
        }
         */
    }

    async play() {
        document.removeEventListener('keydown', () => { });
        this.setState({ playing: true });
        this.dividerComponent.open();
        const playStatus$ = ensureNotFalsy(this.gameFrameComponent).startGame();
        const levelNr = this.props.match.params.level;
        playStatus$.subscribe((currentValue: any) => {
            this.setState({ diamonds: currentValue.diamonds, pause: currentValue.pause });
            if (currentValue.explanation)
                this.explanationComponent.display(currentValue.explanation, currentValue.icon);
            else this.explanationComponent.hide();
        });
        playStatus$.pipe(
            filter((obj: any) => obj.complete)
        ).subscribe(async (currentValue: any) => {
            const promise1 = this.dividerComponent.close();
            const promise2 = this.levelModel.upsertLevel(
                levelNr,
                currentValue.success,
                currentValue.survived,
                currentValue.diamonds
            );
            await Promise.all([promise1, promise2]);
            const storedLevel = await this.levelModel.getByNr(levelNr);
            if (this.levelEndComponent) {
                this.levelEndComponent.startCountDown();
            }
            this.setState({ end: true });
            this.setState({ success: storedLevel.success });
            this.setState({ survived: currentValue.survived });
            this.setState({ diamonds: currentValue.diamonds });
        });
    }

    async playNextLevel() {
        this.props.history.push('/level/' + this.state.nextLevel);
        await this.reset();
    }
    allLevels() {
        this.props.history.push('/level');
    }


    componentWillUnmount() { }

    render() {
        const CurrentGameFrame = this.state.gameFrameComponent;
        return (
            <MuiThemeProvider>
                <div className="level">
                    {this.state.canNotBePlayed &&
                        <CheaterComponent onAllLevels={this.allLevels.bind(this)}></CheaterComponent>
                    }
                    <LevelDashboardComponent pause={this.state.pause ? 'pause' : ''} diamonds={this.state.diamonds} />
                    <DividerComponent ref={instance => this.dividerComponent = instance} />
                    <ExplanationComponent ref={instance => this.explanationComponent = instance} />
                    <CurrentGameFrame />
                    <div className={'intro' + (this.state.end ? '' : ' hidden')}>
                        {
                            this.state.end &&
                            <LevelEndComponent ref={instance => this.levelEndComponent = instance} nextLevel={this.state.nextLevel} success={this.state.success}
                                onAllLevels={this.allLevels.bind(this)} onNextLevel={this.playNextLevel.bind(this)}
                                onRepeat={this.reset.bind(this)} />
                        }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default withRouter(LevelPage);


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


<div className="intro">
  <h1>Nirania</h1>
  <h3>Level {this.props.match.params.level}</h3>
  <RaisedButton label="Play" primary={true} onClick={this.play.bind(this)}/>
</div>s
 */
