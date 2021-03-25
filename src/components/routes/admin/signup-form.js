import React, {Component} from 'react';
import GoogleButton from 'react-google-button';
import '../../../styles/signup-form.scss';

const CN = 'signup-form';

export default class SignUpForm extends Component {
  render() {
    return (
      <div className={CN}>
        <div className={[`${CN}-container`]}>
          <p className={[`${CN}-title`]}>Join our community!</p>
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
