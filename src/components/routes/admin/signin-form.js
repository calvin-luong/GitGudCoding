import React, {Component} from 'react';
import GoogleButton from 'react-google-button';
import '../../../styles/signin-form.scss';

const CN = 'signin-form';

export default class SignInForm extends Component {
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
  window.location.href = 'http://localhost:5000/google/auth';
}
