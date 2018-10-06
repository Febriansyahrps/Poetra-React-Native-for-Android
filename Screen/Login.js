import React from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, Button} from 'react-native';


import Second from './Second';

class Login extends React.Component
{
	render()
	{
		return(
        <KeyboardAvoidingView style={styles.container}>
        
        <View style={styles.container}>
            
             <View style={styles.logoContainer}>
                <Image 
                  style={styles.logo}
                  source={require('./fblogo.png')} />
             </View>
            
             <View style={styles.formContainer}>
            
            <TextInput 
                placeholder="Username or Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input} 
            />

            <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input} 
            />
        
            <Button style={styles.buttonContainer}
                onPress ={() =>{this.props.navigation.navigate('Second')}}
                title = "LOGIN"
            />
             </View>
        
        </View>

        </KeyboardAvoidingView>
        
        );
	}
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#003366',
    },

    logoContainer:
    {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',

    },
    
    logo:
    {
        width: '50%',
        height: 40,
    },

    formContainer:
    {
        padding: 20,
    },

    input:
    {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonContainer:
    {
        backgroundColor: '#2980B9',

    },

    buttonText:
    {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
});

export default Login;