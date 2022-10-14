// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native';

// const Home = ({})=>{
   
//     return (
// <View style={styles.container}>
    
//     <TextInput placeholder='search here' />
//     <View style={styles.products}>
//         <Image  />

//     </View>
    
// </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
//   export default Home;
import React from 'react';
import{ StyleSheet,
		Text,
		View,
		FlatList,
        TextInput,Image
	} from 'react-native';

import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';



const DATA = [
{
	id:"1",
	title:"SALADS",
},
{
	id:"2",
	title:"BURGER",

},
{
	id:"3",
	title:"DRINKS",

},

];

const Item = ({title}) => {
return(
	<View style={styles.item}  >
		<View>

		</View>
		<View style={styles.eye}>
			<Image source={{uri:'https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg?auto=compress&cs=tinysrgb&w=300'}}/>
	
		</View>

	<Text>{title}</Text>
   
    

	</View>
);
}


export default function App() {
	

const renderItem = ({item})=>(
<Item title={item.title}/>


);
return (
<View style={styles.container}>
    
<SearchBar
    placeholder="Type Here..."
    lightTheme
    round
    autoCorrect={false} 

   
/>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	
	/>
    <View style={styles.add}>
  
   </View>
   {/* <View style={styles.order }>
                <TouchableOpacity  title='Register' onPress={() => navigation.navigate('Register')} >
                <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:10,padding:10}}>Register</Text>
                </TouchableOpacity>
</View> */}
 
</View>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor:'#fff',
	marginTop:30,
	padding:2,
	maxHeight:'840',
	maxWidth:1000,
	borderRadius:10
},
item: {
	backgroundColor: 'skyblue',
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
    borderRadius:10
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
  add:{
	marginLeft:250,
	color:'#98EDC3',

  },
  eye:{
	color:'black',

  },
  total:{
	backgroundColor:"green"
  },
  stock:{
	backgroundColor:'#fff',
  }
  
 
});
