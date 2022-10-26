// import React, { useState, useEffect } from 'react';

// import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { auth } from '../../config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const Login = ({navigation}) => {
   

//     //states
//     //login states
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     //error state
//     const [errMsg, setErrMsg] = useState('');

//     useEffect(()=>{
//         if (auth.currentUser) {
//             navigation.navigate('Home');
//         }
//     }, [])

//     //function to log in
//     const loginWithEmail = async() => {
//         //error handling
//         //check if email is empty
//         if (email === '') {
//             //problem
//             setErrMsg('Email is required to log in');
//         } else {
//             //check if password is empty
//             if (password === '') {
//                 //problem
//                 setErrMsg('Password is required to login')
//             } else {
//                 await signInWithEmailAndPassword(auth, email, password).then(
//                     userCridential => {
//                         navigation.navigate('Home')
//                     }
//                 ).catch(
//                     err => {
//                         setErrMsg(err.message);
//                     }
//                 )
//             }
//         }
//     }


//   return (
//     <View style={styles.container}>
//         <Text>LOGIN</Text>
//         <br></br>
//         <ImageBackground source={{uri:'https://images.pexels.com/photos/11806779/pexels-photo-11806779.jpeg?auto=compress&cs=tinysrgb&w=400'}}
//             style={{width:400, height:400}}
//             >
// <LinearGradient     colors={['rgba(0, 0, 0, 0) 69.79%', '#070627']}
//           style={{ padding: 205, alignItems: 'center', borderRadius: 5 }}>

// </LinearGradient>
//             </ImageBackground>
//         <View>
//             {errMsg === '' ? (<Text style={styles.goodErr}>message</Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
//         </View>
//         <View>
//             <View>
//                 <Text>Email</Text>
//                 <TextInput onChangeText={value => setEmail(value)} style={styles.text}/>
//             </View>

//             <View>
//                 <Text>Password:</Text>
//                 <TextInput onChangeText={value => setPassword(value)} style={styles.text}/>
//             </View>
//             <br></br>
// <View style={styles.lgn}>
//             <TouchableOpacity  onPress={loginWithEmail} >
//             <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:20,padding:10}}>Login</Text>
//             </TouchableOpacity>
//          </View>
//          <br></br>
       
//                 <Text>Don't have an account?</Text>
//                 <br></br>
//                 <View style={styles.register }>
//                 <TouchableOpacity  title='Register' onPress={() => navigation.navigate('Register')} >
//                 <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:20,padding:10}}>Register</Text>
//                 </TouchableOpacity>
// </View>
        

//         </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor:'#f0ffff',
//         marginTop:30,
//         padding:2,
//         maxHeight:'840',
//         maxWidth:1000,
//         borderRadius:10,
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
     
//     },
//     badErr: {
//         backgroundColor: '#ff0000',
//         color: '#ffffff',
//     },
//     goodErr: {
//         backgroundColor: 'skyblue',
//         color: '#ffffff',
//     },
//     text:{
//         backgroundColor:'#fff',
//         width:250,
//         height:40 ,
//         borderRadius:10
//     },
//     // lgn: {
//     //     borderWidth: 1,
//     //     borderColor: 'black',
//     //     width:189,
//     //     height:46,
//     //     borderRadius:40,
//     //     backgroundColor:'#96DED1',
//     //     alignItems:'center',
//     //     justifyContent:'center',
//     //  },
//     //  register:{
//     //     borderWidth: 1,
//     //     borderColor: 'black',
//     //     width:189,
//     //     height:46,
//     //     borderRadius:40,
//     //     backgroundColor:'#96DED1',
//     //     alignItems:'center',
//     //     justifyContent:'center',
//     //  }
// })

// export default Login

import React, { useState, useEffect } from 'react';

import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity,SafeAreaView } from 'react-native';


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
    <View style={{backgroundColor:'white'}} >
    <View style={styles.container}>
      
        <View>
            {errMsg === '' ? (<Text style={styles.goodErr}></Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
        </View>
        <View>
        <Text>please enter the email<br></br> and password registered <br></br>with your account</Text>
            <View>

                <TextInput  onChangeText={value => setEmail(value)} style={styles.input}  placeholder='Email' />
            </View>

            <View>
               
                <TextInput onChangeText={value => setPassword(value)} style={styles.input}  placeholder='Password' secureTextEntry />
            </View>

            <View style={styles.lgn}>
            <TouchableOpacity style={styles.btn} color="#0faf9a"  onPress={loginWithEmail}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.acc} >
                <Text  style={styles.reg}  color="#0faf9a" title='Register' onPress={() => navigation.navigate('Register')} >Not registered <Text style={styles.ed} >register</Text></Text>
                
            </View>

        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: 50,
   backgroundColor:'#f0ffff',
        height: 500,
        width: 300,
        borderRadius: 20,
        
        
        
        
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    goodErr: {
        backgroundColor: '#00ff00',
        color: '#ffffff',
    },
    input:{
        borderWidth:  1,
        backgroundColor: '#fff',
        marginTop: 20,
        width:200,
        borderColor:'gray',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
        color:'#A09999',
        paddingLeft: 20
    },
    acc:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lgn:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    reg:{
    
    },
    fog:{
        color:'#36EBCA',
        marginTop: 20,
        textDecorationLine: 'underline',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        borderRadius:35,
        borderRadius: 10,
        width:189,
        height:46,
        color:'white',
        backgroundColor:'#0faf9a',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    ed:{
        color:'blue',
        textDecorationLine: 'underline',

    },
})

export default Login