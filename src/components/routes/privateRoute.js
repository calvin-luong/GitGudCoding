import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getIsAuthenticated } from "../../resolvers";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getIsAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

export default PrivateRoute;
