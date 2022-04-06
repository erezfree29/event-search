/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Events from './components/events';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recipe App</title>
      </Helmet>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

function Home() {
  return <Events />;
}

export default App;
