import React from 'react';
import {Text} from 'react-native';

class Login extends React.Component
{
	render()
	{
		return(<Text style={kata.welcome}>{this.props.title}</Text>)
	}
}

const kata ={
  welcome: {
    fontSize: 20,
    color : '#f00',
    textAlign: 'center',
    margin : 5,
    }
}
export default Login;