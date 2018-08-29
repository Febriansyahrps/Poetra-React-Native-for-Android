/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, AppRegistry} from 'react-native';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
	<Text style={styles.instructions}>{instructions}</Text>
}); */

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Masuk Pak AIC!</Text>
        <Text style={styles.welcome}>Nama:Febriansyah Rizqi Putra Setiyadi</Text>
		<Text style={styles.welcome}>Kelas:XI RPL IV</Text>
		<Text style={styles.welcome}>No:25</Text>
		<Image
          source={require('./7.png')}
          style= {{width:300, height:250}}/>
        
		
        
      </View>
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
 /* instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
