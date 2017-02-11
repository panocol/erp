import React, {Component} from 'react';
import {firebaseUIConfig, firebaseAuthUI} from '../firebase'
import firebaseui from 'firebaseui';

class Login extends Component {

  componentDidMount() {
    firebaseAuthUI.start("#firebaseui-auth-container", firebaseUIConfig);
  }

  render() {
    return <div id="firebaseui-auth-container"></div>
  }

}

export default Login;

