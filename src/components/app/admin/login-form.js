import React, { Component } from "react";
import GoogleButton from "react-google-button";
import "../../../styles/login-form.scss";

const CN = "login-form";

export default class LoginForm extends Component {
  render() {
    return (
      <div className={CN}>
        <div className={[`${CN}-container`]}>
          <div className={[`${CN}-logo`]} />
          <p className={[`${CN}-title`]}>Welcome back!</p>
          <GoogleButton
            type="light"
            className={[`${CN}-google-button`]}
            onClick={startGoogleAuth}
          />
        </div>
      </div>
    );
  }
}

function startGoogleAuth() {
  window.location.href = "/google/auth";
}
