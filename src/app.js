import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
  SearchQuestions,
} from "./components/index";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <PrivateRoute exact path="/" component={Landing} />
              <Route path="/sign-in" component={Signin} />
              <Route path="/sign-up" component={SignUp} />
              <PrivateRoute path="/searchVid" component={SearchVid} />
              <PrivateRoute path="/discussion" component={Discussion} />
              <PrivateRoute path="/post" component={Post} />
              <PrivateRoute path="/create-post" component={CreatePost} />
              <PrivateRoute
                path="/create-post-video"
                component={CreatePostWVideo}
              />
              <PrivateRoute
                path="/searchQuestions"
                component={SearchQuestions}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
