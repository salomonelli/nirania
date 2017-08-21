import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';

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
                <h1>RxDB Example - React</h1>
              </MuiThemeProvider>
        );
    }
}

export default App;
