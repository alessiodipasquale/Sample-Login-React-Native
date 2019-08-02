import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/github-153-675523.png')} />
          </View>
          <View style={styles.formContainer}>
             <LoginForm />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Non sei registrato?</Text><Text style={styles.signUpButton}> Registrati!</Text>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e74c3c'
    },
    logoContainer : {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    signUpContainer: {
      flexDirection:'row', 
      flexWrap:'wrap',
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signUpButton: {
      fontWeight: 'bold'
    }
})