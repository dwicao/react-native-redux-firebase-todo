import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Drawer from 'react-native-drawer'
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/Signup';
import MainScreen from './Screens/Main';
import EditScreen from './Screens/Edit';
import ControlPanel from './ControlPanel';

export default class App extends Component {
  render() {
    return (
      <Drawer
      type="overlay"
      content={<ControlPanel />}
      side='right'
      tapToClose={true}
      openDrawerOffset={0.3} // 20% gap on the right side of drawer
      panCloseMask={0.3}
      panOpenMask={0.3}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
  	    <Router>
  	      <Scene key='root'>
            <Scene key='loginScreen'
  	        	animation='fade'
  	        	component={LoginScreen}
              panHandlers={null}
  	        	hideNavBar={true} initial />
            <Scene key='signupScreen'
  	        	animation='fade'
  	        	component={SignupScreen}
              panHandlers={null}
  	        	hideNavBar={true} />
  	        <Scene key='mainScreen'
  	        	animation='fade'
  	        	component={MainScreen}
              panHandlers={null}
  	        	hideNavBar={true} />
  	        <Scene key='editScreen'
  	        	animation='fade'
  	        	hideNavBar={true}
              panHandlers={null}
  	        	component={EditScreen} />
  	      </Scene>
  	    </Router>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingRight: 3},
}
