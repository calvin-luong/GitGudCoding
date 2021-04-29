import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
   const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);

   useEffect(() => {
      const apiUrl = 'localhost:5000/api/auth/check';
      axios
         .get(apiUrl)
         .then(function (response) {
            console.log(response);
            setUserIsLoggedIn(response);
         })
         .catch(function (error) {
            console.log(error);
         });
   }, []);

   return (
      <Route
         {...rest}
         render={(props) =>
            isUserLoggedIn ? (
               <Component {...props} />
            ) : (
               <Redirect
                  to={{ pathname: '/login', state: { from: props.location } }}
               />
            )
         }
      />
   );
};

export default PrivateRoute;
