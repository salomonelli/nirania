import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';

// Pages
import LevelPage from './pages/level/level';
import HomePage from './pages/home/home';
import LevelOverviewPage from './pages/level-overview/level-overview';

// global css
import './App.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/level" component={LevelOverviewPage}/>
      <Route exact path="/level/:level" component={LevelPage}/>
    </div>
  </Router>,
  document.getElementById('app')
);
