import React, { Component } from 'react';
import { fromEvent } from 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom';

import './home.css';
import { first } from 'rxjs';

class HomePage extends Component<any> {

  async componentDidMount() {
    fromEvent(document, 'keydown')
      .pipe(
        first()
      )
      .subscribe(() => this.goToFirstLevel());
    fromEvent(document, 'click')
      .pipe(
        first()
      )
      .subscribe(() => this.goToFirstLevel());
  }

  goToFirstLevel() {
    this.props.history.push('/level/1?autostart');
  }

  componentWillUnmount() { }

  render() {
    return (
      <MuiThemeProvider>
        <div className="page">
          <div className="wrapper">
            <h1>Nirania</h1>
            <p className="mobile">Tap to play</p>
            <p className="desktop">Press any key to play</p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(HomePage);
