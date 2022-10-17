import React, { useState, useEffect } from 'react';

import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {
   

    //states
    //login states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //error state
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        }
    }, [])

    //function to log in
    const loginWithEmail = async() => {
        //error handling
        //check if email is empty
        if (email === '') {
            //problem
            setErrMsg('Email is required to log in');
        } else {
            //check if password is empty
            if (password === '') {
                //problem
                setErrMsg('Password is required to login')
            } else {
                await signInWithEmailAndPassword(auth, email, password).then(
                    userCridential => {
                        navigation.navigate('Home')
                    }
                ).catch(
                    err => {
                        setErrMsg(err.message);
                    }
                )
            }
        }
    }


  return (
    <View style={styles.container}>
        <Text>LOGIN</Text>
        <br></br>
        {/* <ImageBackground source={{uri:'https://images.pexels.com/photos/11806779/pexels-photo-11806779.jpeg?auto=compress&cs=tinysrgb&w=400'}}
            style={{width:400, height:400}}
            >
<LinearGradient     colors={['rgba(0, 0, 0, 0) 69.79%', '#070627']}
          style={{ padding: 205, alignItems: 'center', borderRadius: 5 }}>

</LinearGradient>
            </ImageBackground> */}
        <View>
            {errMsg === '' ? (<Text style={styles.goodErr}>message</Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
        </View>
        <View>
            <View>
                <Text>Email</Text>
                <TextInput onChangeText={value => setEmail(value)} style={styles.text}/>
            </View>

            <View>
                <Text>Password:</Text>
                <TextInput onChangeText={value => setPassword(value)} style={styles.text}/>
            </View>
            <br></br>
<View style={styles.lgn}>
            <TouchableOpacity  onPress={loginWithEmail} >
            <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:20,padding:10}}>Login</Text>
            </TouchableOpacity>
         </View>
         <br></br>
       
                <Text>Don't have an account?</Text>
                <br></br>
                <View style={styles.register }>
                <TouchableOpacity  title='Register' onPress={() => navigation.navigate('Register')} >
                <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:20,padding:10}}>Register</Text>
                </TouchableOpacity>
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
   alignItems:'center'
     
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    goodErr: {
        backgroundColor: 'skyblue',
        color: '#ffffff',
    },
    text:{
        backgroundColor:'#fff',
        width:250,
        height:40 ,
        borderRadius:10
    },
    // lgn: {
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     width:189,
    //     height:46,
    //     borderRadius:40,
    //     backgroundColor:'#96DED1',
    //     alignItems:'center',
    //     justifyContent:'center',
    //  },
    //  register:{
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     width:189,
    //     height:46,
    //     borderRadius:40,
    //     backgroundColor:'#96DED1',
    //     alignItems:'center',
    //     justifyContent:'center',
    //  }
})

export default Login