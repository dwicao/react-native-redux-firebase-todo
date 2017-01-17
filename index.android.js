import codePush from "react-native-code-push";
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/components/';
import * as actions from './src/actions/todoActions';

const store = configureStore();

class todo extends Component {
  componentDidMount() {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent( 'todo', () => codePush(todo) );
