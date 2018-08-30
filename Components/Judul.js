import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component
{
	render()
	{
		return(<Text style={kata.welcome}>Biodata</Text>)
	}
}

const kata ={
  welcome: {
    fontSize: 30,
    color : '#f00',
    textAlign: 'center',
    margin : 10,
    }
}
export default Judul;