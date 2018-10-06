import React,{Component}from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

import Login from './Login';

export default class Second extends Component{
    redirect()
    {
        Alert.alert("This Button is ready")

    }

    render(){  
        return(
         <View style={styles.container}>

        <Text style={styles.judul}>BIODATA!</Text>

        <Text style={styles.welcome}>Nama:Febriansyah Rizqi Putra Setiyadi</Text>
        <Text style={styles.welcome}>Kelas:XI RPL IV</Text>
        <Text style={styles.welcome}>No:11</Text>
        <Image
            source={require('./7.png')}
            style= {{width:300, height:200}}/>
        
        <Button title=" LOG OUT "  
         onPress ={() =>{this.props.navigation.navigate('Login')}}/>
         </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
  },
  judul:
  {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    color :'#FFF',
  },
});