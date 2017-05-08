import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

// Pages
import LevelPage from './pages/level/level';

// global css
import './App.css';

ReactDOM.render(
    <Router>
    <Route path="/level/:level" component={LevelPage}/>
</Router>, document.getElementById('app'));
