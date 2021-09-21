import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from './app/redux/store';

import Header from './components/Header';
import Premier from './components/Premier';
import LaLiga from './components/Laliga';
import SeriaA from './components/SeriaA';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/priemier">
              <Pleague />
            </Route>
            <Route path="/seria">
              <Sera />
            </Route>
            <Route exact path="/laliga">
              <Lliga />
            </Route>
            <Route exact path="/">
              <Lliga />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Lliga() {
  return <LaLiga />;
}

function Pleague() {
  return <Premier />;
}

function Sera() {
  return <SeriaA />;
}

export default App;
