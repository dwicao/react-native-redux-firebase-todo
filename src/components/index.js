import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LoginScreen from './Screens/Login';
import MainScreen from './Screens/Main';
import EditScreen from './Screens/Edit';

export default class App extends Component {
  render() {
    return (
	    <Router>
	      <Scene key="root">
          <Scene key="loginScreen"
	        	animation='fade'
	        	component={LoginScreen}
	        	hideNavBar={true}/>
	        <Scene key="mainScreen"
	        	animation='fade'
	        	component={MainScreen}
	        	hideNavBar={true}
            initial />
	        <Scene key="editScreen"
	        	animation='fade'
	        	hideNavBar={true}
	        	component={EditScreen}/>
	      </Scene>
	    </Router>
    );
  }
}
