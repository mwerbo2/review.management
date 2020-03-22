import React, { Fragment, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SearchResults from './components/SearchResultsContainer';
import UnitResult from './components/UnitResultContainer';
import SignUp from './components/SignUp'

// Brings redux functionality into react
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App= () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);
  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/result' component={UnitResult} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
 