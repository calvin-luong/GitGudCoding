import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignUpSignInCard from "./admin/signin-singup-card";
import SignUpForm from "./admin/signup-form";
import "../../styles/signup.scss";

const CN = "signup";

export default class SignUp extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <SignUpSignInCard />
          </Col>
          <Col>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
