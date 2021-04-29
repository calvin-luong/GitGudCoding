import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginSignUpCard from './admin/login-singup-card';
import SignUpForm from './admin/signup-form';
import '../../styles/signup.scss';

export default class SignUp extends Component {
   render() {
      return (
         <Container fluid>
            <Row>
               <Col>
                  <LoginSignUpCard />
               </Col>
               <Col>
                  <SignUpForm />
               </Col>
            </Row>
         </Container>
      );
   }
}
