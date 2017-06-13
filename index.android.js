import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomePage from './src/pages/home.page';

export default class projectAnyoneTourist extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" title="Inicio" component={HomePage} hideNavBar={true} initial={true}></Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('projectAnyoneTourist', () => projectAnyoneTourist);
