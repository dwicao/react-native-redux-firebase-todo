import React from 'react';
import firebase from 'firebase';
import Login from '../LoginSignup/Login';
import Main from './Main';

const LoginScreen = props => {
    if (firebase.auth()) {
      return <Main />;
    }

    return <Login />;
}

export default LoginScreen;
