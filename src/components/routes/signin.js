import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginSignUpCard from "../app/admin/login-singup-card";
import LoginForm from "../app/admin/login-form";
import "../../styles/login.scss";

export default class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <LoginSignUpCard />
          </Col>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
