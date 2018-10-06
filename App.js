import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Login from './Screen/Login';
import Second from './Screen/Second';

const AppNavigator = createStackNavigator ({
  Login : Login,
  Second : Second,

});

export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
 