import React, { Component } from 'react';

import {Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {AsyncStorage} from 'react-native';
import {ToastAndroid} from 'react-native';



export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }

    _storeData = async (token) => {
        try {
          await AsyncStorage.setItem('token', token);
          ToastAndroid.show('Login riuscito !', ToastAndroid.SHORT);

        } catch (error) {
            ToastAndroid.show('Errore nel salvataggio !', ToastAndroid.SHORT);

        }
      };

    _onPressButton = () => {
        let data = {
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          }
          try {
          return fetch('http://192.168.1.112:3000/login', data)
                .then(response => {
                    if (response.status == '200') {
                        response.json()
                        .then(json => this._storeData(json.token))
                    } else {
                        ToastAndroid.show('Credenziali errate !', ToastAndroid.SHORT);                    }
                }) // promise
                  
          } catch (error) {
            ToastAndroid.show('Errore nella richiesta !', ToastAndroid.SHORT);

          }
           
    }

    

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
           onChangeText={(email) => this.setState({email: email})}
           />
          <TextInput style={styles.input}
           placeholder="Password"
           placeholderTextColor="#000"
           secureTextEntry
           onChangeText={(password) => this.setState({password: password})}
           />
           <TouchableOpacity onPress={this._onPressButton} style={styles.buttonContainer}>
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
        marginBottom: 20,
        flexGrow: 1,

    },
    input : {
        height: 60,
        borderColor: 'rgba(209,209,209,0.5)',
        color: '#585858',
        borderWidth: 2,
        marginBottom: 40,
        borderRadius: 40,
        paddingHorizontal: 30,
        color: '#000'
    },
    buttonContainer : {
        backgroundColor: '#ff8496',
        paddingVertical: 20,
        borderRadius: 40
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18

    }
})