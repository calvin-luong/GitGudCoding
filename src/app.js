import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Signin,
  SignUp,
  SearchVid,
  Discussion,
  Post,
  CreatePost,
  CreatePostWVideo,
  Landing,
  PrivateRoute,
} from "./components/index";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/sign-in" component={Signin} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/searchVid" component={SearchVid} />
              <Route path="/discussion" component={Discussion} />
              <Route path="/post" component={Post} />
              <Route path="/create-post" component={CreatePost} />
              <Route path="/create-post-video" component={CreatePostWVideo} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
