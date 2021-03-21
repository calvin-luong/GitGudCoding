import React, { Component } from "react";
import GoogleButton from 'react-google-button'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <GoogleButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </div>
            </div>
        );
    }
}
