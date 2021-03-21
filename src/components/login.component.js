import React, { Component } from "react";
import GoogleButton from 'react-google-button'
import "../styles/login.scss";

const CN = "login"

export default class Login extends Component {
    render() {
        return (
            <div className={CN}>
                <p className={CN+'-title'}>Welcome back!</p>
                    <div className={CN+'-google-button-container'}>
                    <GoogleButton
                        type="light"
                        className={CN+'-google-button'}
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </div>
            </div>
        );
    }
}
