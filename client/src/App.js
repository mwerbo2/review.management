import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
      </Fragment>
    </Router>
  );
}

export default App;
