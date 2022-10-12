import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Router,
  Switch,
  Route
} from 'react-router';
import HomePage from './pages/home/home';
import LevelOverviewPage from './pages/level-overview/level-overview';
import LevelPage from './pages/level/level';
import { createBrowserHistory } from 'history';
const history: any = createBrowserHistory();


// TODO remove these after rxdb update
(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
  nextTick: function () {
    return new Promise<void>(res => {
      setTimeout(res, 0);
    })
  }
}


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/level/:level">
          <LevelPage />
        </Route>
        <Route path="/level">
          <LevelOverviewPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
