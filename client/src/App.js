import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SearchResults from './components/SearchResultsContainer';
import UnitResult from './components/UnitResultContainer';

// Brings redux functionality into react
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/result' component={UnitResult} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
 