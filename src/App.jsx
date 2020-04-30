import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        return (
              <MuiThemeProvider>
                <h1>Nirania</h1>
              </MuiThemeProvider>
        );
    }
}

export default App;
