
import React from "react";
import Login from "./src/screens/logins";
import Register from "./src/screens/register";
import Home from "./src/components/home"
import Card from "./src/components/Card"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {

  
  return (
 
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
       headerShown:false
        
      
      }} >
       
        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{title:'Register'}}>
          {(props) => <Register {...props} />}
        </Stack.Screen> 

        <Stack.Screen  name='Home' options={{title:'Home'}}>
          {(props) => <Home {...props} /> } 
        </Stack.Screen> 
        <Stack.Screen  name='Card' options={{title:'Card'}}>
          {(props) => <Card {...props} /> } 
        </Stack.Screen> 
        
       

       

  
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     maxHeight:840,
//     maxWidth:1000,
//     height:896,
//     width:424,
//   },
// })
