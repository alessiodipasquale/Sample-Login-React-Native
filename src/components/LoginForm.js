import React, { Component } from 'react';

import {Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content"/>
          <TextInput style={styles.input}
           placeholder="Username"
           placeholderTextColor="#000"
           keyboardType="email-address"
           autoCapitalize="none"
           autoCorrect={false}
           />
          <TextInput style={styles.input}
           placeholder="Password"
           placeholderTextColor="#000"
           secureTextEntry
           />
           <TouchableOpacity style={styles.buttonContainer}>
               <Text style={styles.buttonText}>
                Accedi
               </Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        padding: 40,
        marginBottom: 20
    },
    input : {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        borderRadius: 40,
        paddingHorizontal: 10,
        color: '#000'
    },
    buttonContainer : {
        backgroundColor: '#c0392b',
        paddingVertical: 20
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'

    }
})