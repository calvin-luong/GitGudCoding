import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './components/routes/home';
import About from './components/routes/about';
import SignIn from './components/routes/signin';
import SignUp from './components/routes/signup';
import Search from './components/routes/navbar';
import NavBar from './components/routes/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/navbar" component={Search} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
