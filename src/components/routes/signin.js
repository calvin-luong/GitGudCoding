import React, { Component } from "react";
import GoogleButton from "react-google-button";
import "../../styles/signin.scss";
import NavBar from "./navbar";

const CN = "signin";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className={CN}>
          <p className={CN + "-title"}>Welcome back!</p>
          <div className={CN + "-google-button-container"}>
            <GoogleButton
              type="light"
              className={CN + "-google-button"}
              onClick={startGoogleAuth}
            />
          </div>
        </div>
      </div>
    );
  }
}

function startGoogleAuth() {
  window.location.href = "http://localhost:5000/google/auth";
}
