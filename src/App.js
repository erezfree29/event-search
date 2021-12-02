/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { store } from './redux/store';
import Homepage from './components/home';
import Recipes from './components/recepies';

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Home() {
  return <Homepage />;
}

export default App;
