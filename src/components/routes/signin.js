import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignUpSignInCard from './admin/signin-singup-card';
import SignInForm from './admin/signin-form';
import '../../styles/signin.scss';

export default class SignIn extends Component {
   render() {
      return (
         <Container fluid>
            <Row>
               <Col>
                  <SignUpSignInCard />
               </Col>
               <Col>
                  <SignInForm />
               </Col>
            </Row>
         </Container>
      );
   }
}
