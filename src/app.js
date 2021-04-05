import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/routes/home";
import About from "./components/routes/about";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Search from "./components/routes/navbar";
import NavBar from "./components/routes/navbar";
import Landing from "./components/landing";

function App() {
  return (<Router>
    <div className="App">

      <div className="auth-wrapper">
        <NavBar />
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/landing" component={Landing}/>
            <Route path="/navbar" component={Search} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
