import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from './app/redux/store';

import Header from './components/Header';
import MissionsPage from './components/Missons';
import MyprofilePage from './components/Myprofile';
import MatchesPage from './components/matches';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/myprofile">
              <Myprofile />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route exact path="/rockets">
              <Matches />
            </Route>
            <Route exact path="/">
              <Matches />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Matches() {
  return <MatchesPage />;
}

function Missions() {
  return <MissionsPage />;
}

function Myprofile() {
  return <MyprofilePage />;
}

export default App;
