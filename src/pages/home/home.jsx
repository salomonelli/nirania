import React, {Component} from 'react';
import Rx from 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './home.css';

class HomePage extends Component {

    async componentDidMount() {
        Rx.Observable.fromEvent(document, 'keydown')
        .first()
        .subscribe(() => this.goToFirstLevel());
        Rx.Observable.fromEvent(document, 'click')
        .first()
        .subscribe(() => this.goToFirstLevel());
    }

    goToFirstLevel() {
        this.props.history.push('/level/1?autostart');
    }

    componentWillUnmount() {}

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

export default HomePage;
