import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpSignInCard from "../app/admin/signin-singup-card";
import SignUpForm from "../app/admin/signup-form";
import "../../styles/signup.scss";

export default class SignUp extends Component {
  render() {
    return (
      <Row>
        <Col>
          <SignUpSignInCard />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
    );
  }
}
