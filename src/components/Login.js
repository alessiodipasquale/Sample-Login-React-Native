import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, ImageBackground} from 'react-native';

import LoginForm from './LoginForm';
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground style={styles.picture} source={require('../assets/background.png')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo1.png')} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> Ciao </Text>
            <Text style={styles.subtitile}> Accedi con il tuo account </Text>
          </View>
          <View style={styles.formContainer}>
             <LoginForm />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Non sei registrato?</Text><Text style={styles.signUpButton}> Registrati!</Text>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    picture: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    logoContainer : {
        alignItems: 'center',
        flexGrow: 0.7,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    titleContainer : {
      flexGrow: 0.6,
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: '#343434',
      fontSize: 70,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#cacaca',
    },
    signUpContainer: {
      flexDirection:'row', 
      flexWrap:'wrap',
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signUpButton: {
      fontWeight: 'bold',
      color: '#ff3cbd'
    }
})