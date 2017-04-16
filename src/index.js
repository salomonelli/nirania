import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

import App from './App';

// Pages
import LevelPage from './pages/level/level';

ReactDOM.render(
    <Router>
    <Route path="/level/:level" component={LevelPage}/>
</Router>, document.getElementById('app'));
