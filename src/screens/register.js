
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({navigation}) => {
    //states for error
    const [errMsg, setErrMsg] = useState('');

    //states for new user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        } 
    }, [])

    //function to register new user with email and password
    const registerWithEmail = async() => {
        //check if inputs are empty
        if (email === '') {
            //email empty
            setErrMsg('Email is required to register');
            alert('Email is required to register');
        } else {
            if (password === '') {
                //new password empty
                setErrMsg('Password is required to register');
            } else {
                if (confirmPassword === '') {
                    //confirm password empty
                    setErrMsg('Confirm password is required to register');
                } else {
                    if (password !== confirmPassword) {
                        //pasword does not match
                        setErrMsg('Passwords entered does not match');
                    } else {
                        //good to go
                        await createUserWithEmailAndPassword(auth, email, password).then(
                            userCridential => {
                                setErrMsg('');
                                navigation.navigate('Home');
                            }
                        ).catch(
                            err => {
                                setErrMsg(err.message);
                            }
                        )
                    }
                }
            }
        }
    }
  return (
    
    <View style={styles.container}>
     
        {errMsg !== '' ? (<View><Text style={styles.badErr}>{errMsg}</Text></View>) : (<View><Text style={styles.goodErr}>message</Text></View>) }
        <View>
            <View>

                <Text>Email</Text>
                <TextInput onChangeText={value => setEmail(value)} style={styles.text} />
            </View>
<br></br>
            <View>
                <Text>Password:</Text>
                <TextInput onChangeText={value => setPassword(value)} style={styles.text} />
            </View>
<br></br>
            <View>
                <Text>Confirm Password:</Text>
                <TextInput onChangeText={value => setConfirmPassword(value)} style={styles.text} />
            </View>
            <br></br>
            <TouchableOpacity title='Register' onPress={registerWithEmail} >
                <Text style={{color:'black',backgroundColor:'#0faf9a',width:189,height:40, borderRadius:35,
        borderRadius: 10,padding:10}}>Register</Text></TouchableOpacity>
                <br></br>
            <View>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={{color:'black',backgroundColor:'#0faf9a',width:189,height:40, borderRadius:35,
        borderRadius: 10,padding:10}}>Login</Text></TouchableOpacity>
            </View>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0ffff'
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    goodErr: {
        // backgroundColor: '#00ff00',
        color: '#ffffff',
        backgroundColor:'skyblue'
    },
    text:{
        backgroundColor:'#fff',
        width:250,
        height:40 ,
        borderRadius:10
    },
})

export default Register
  