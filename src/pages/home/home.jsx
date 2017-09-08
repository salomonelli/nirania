import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {

    async componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
          <MuiThemeProvider>
            <div className="page">
              <h1>Nirania</h1>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default HomePage;
