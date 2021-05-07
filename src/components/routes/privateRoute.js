import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  async function isUserLoggedIn() {
    var loggedIn = false;
    const apiUrl = "/api/auth/check";
    axios
      .get(apiUrl)
      .then(function (response) {
        console.log("authenticated? " + response.data.authenticated);
        if (response.data.authenticated === true) {
          loggedIn = true;
        }
        console.log(loggedIn);
        return loggedIn;
      })
      .catch(function (error) {
        console.log("PrivateRoute error: " + error);
      });
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default PrivateRoute;
