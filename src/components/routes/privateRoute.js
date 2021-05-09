import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getIsAuthenticated } from "../../resolvers";
import { useEffect, useState } from "react";

const PrivateRoute = (props) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { component: Component, ...rest } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getIsAuthenticated();

      setIsAuthenticated(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Component {...props} />
        ) : loading ? (
          <div>LOADING...</div>
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
