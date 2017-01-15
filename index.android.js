import codePush from "react-native-code-push";
import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import configureStore from './src/store/configureStore';
import App from './src/components/';

const store = configureStore();
persistStore(store, {storage: AsyncStorage});

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