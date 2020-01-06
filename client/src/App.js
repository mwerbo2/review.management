import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResultsContainer';
import UnitResult from './components/UnitResultContainer';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={SearchResults} />
        <Route exact path='/result' component={UnitResult} />
      </Fragment>
    </Router>
  );
}

export default App;
