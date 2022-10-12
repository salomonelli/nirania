import React, { Component } from 'react';
import './level-end.css';
import ReplayIcon from 'material-ui-icons/Replay';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import ViewListIcon from 'material-ui-icons/ViewList';
import {
  interval,
  timeInterval,
  take,
  Subscription
} from 'rxjs';


class LevelEndComponent extends Component<any, any> {
  public subs: Subscription[] = [];
  constructor(props: any) {
    super(props);
    console.dir(this.props);
    this.state = {
      timer: 5
    };
  }

  startCountDown() {
    this.setState({ timer: 5 });

    const timeSub = interval(1000).pipe(
      timeInterval(),
      take(5)
    ).subscribe(
      () => this.setState({ timer: this.state.timer - 1 }),
      error => console.log(error),
      () => {
        if (this.props.success) {
          this.props.onNextLevel();
        } else {
          this.props.onRepeat();
        }
      }
    );
    this.subs.push(timeSub);
  }

  async componentDidMount() { }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  render() {
    return (
      <div >
        <div className='level-end'>
          <div className={'level-success ' + (this.props.success ? '' : 'failure')}>
            <p>
              {
                this.props.success ? 'Level Success' : 'Level Failed'
              }
            </p>
          </div>
          <div className='level-list' onClick={this.props.onAllLevels}>
            <ViewListIcon></ViewListIcon>
            <div>Overview</div>
          </div>
          <div className='level-repeat' onClick={this.props.onRepeat}>
            <ReplayIcon></ReplayIcon>
            <div>Repeat</div>
          </div>
          <div className={'level-next ' + (this.props.success ? '' : 'disabled')} onClick={this.props.onNextLevel}>
            <SkipNextIcon></SkipNextIcon>
            <div>Next Level</div>
          </div>
        </div>
        <div className='auto-starter'>
          <div>{
            this.props.success ? 'Next level starting in ' : 'Repeating level in '
          } {this.state.timer}s</div>
        </div>
      </div>
    );
  }
}

export default LevelEndComponent;
