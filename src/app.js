import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SignIn from './components/routes/signin';
import SignUp from './components/routes/signup';
import SearchVid from './components/routes/searchVid';
import Landing from './components/landing';
import Discussion from './components/routes/discussion';
import Post from './components/routes/post';
import CreatePost from './components/routes/createPost';

function App() {
   return (
      <Router>
         <div className="App">
            <div className="auth-wrapper">
               <div className="auth-inner">
                  <Switch>
                     <Route exact path="/" component={Landing} />
                     <Route path="/searchVid" component={SearchVid} />
                     <Route path="/login" component={SignIn} />
                     <Route path="/sign-up" component={SignUp} />
                     <Route path="/discussion" component={Discussion} />
                     <Route path="/post" component={Post} />
                     <Route path="/create-post" component={CreatePost} />
                  </Switch>
               </div>
            </div>
         </div>
      </Router>
   );
}

export default App;
