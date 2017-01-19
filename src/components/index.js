import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/Signup';
import MainScreen from './Screens/Main';
import EditScreen from './Screens/Edit';

export default class App extends Component {
  render() {
    return (
	    <Router>
	      <Scene key='root'>
          <Scene key='loginScreen'
	        	animation='fade'
	        	component={LoginScreen}
	        	hideNavBar={true} initial />
          <Scene key='signupScreen'
	        	animation='fade'
	        	component={SignupScreen}
	        	hideNavBar={true} />
	        <Scene key='mainScreen'
	        	animation='fade'
	        	component={MainScreen}
	        	hideNavBar={true} />
	        <Scene key='editScreen'
	        	animation='fade'
	        	hideNavBar={true}
	        	component={EditScreen} />
	      </Scene>
	    </Router>
    );
  }
}
