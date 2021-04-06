import React, { Component } from "react";
import SignUpSignInCard from "./admin/signin-singup-card";
import SignUpForm from "./admin/signup-form";
import "../../styles/signup.scss";

const CN = "signup";

export default class SignUp extends Component {
  render() {
    return (
      <div className={CN}>
        <SignUpSignInCard />

        <SignUpForm />
      </div>
    );
  }
}
