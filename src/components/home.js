
import React, { useState } from 'react';
import{ StyleSheet,
		Text,
		View,
		FlatList,
        TextInput,Image
	} from 'react-native';

// import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import { TouchableOpacity } from 'react-native-web';



const Home=({navigation}) =>{
	 const [search,setSearch] =useState("");

     return (
         <View style={styles.container} >
			<View style={{ flexDirection: "row", alignItems: "center" }}>
       
              <Image
                style={{
                  width: 60,
                  height: 70,
                  borderRadius:100,
                  marginRight: 30,
                }}
                source={require("../../assets/resturant/matshepo.jpg")}
              />

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                
                }}
              >
                welcome to mi resturant
              </Text>
            </View>
			<br></br>
			
	 <TextInput style={styles.searchInput} placeholder="search here" />


<br></br>
<Text style={{fleDecoration:'column' , justifyContent:'center',alignItems:'center',marginBottom: 10,justifyContent:'space-between',textDecorationStyle:'solid',backgroundColor:'black',color:'#fff',borderRadius:20}}>Most Popular</Text>
<View style={{flex: 1, 
                flexDirection: "row",
                borderTopLeftRadius: 30, 
                borderTopRightRadius: 30,
				borderBottomLeftRadius:30,
				borderBottomRightRadius:30,
                backgroundColor:'white',
				}}>
 <TouchableOpacity style={{with:60, marginBottom:20}} >
	<Image
                style={{
                  width: 60,
                  height: 70,
                  borderRadius:100,
                  marginRight: 30,
				  fleDecoration:'column'
                }}
                source={require("../../assets/resturant/pexels-photo-327158.jpeg")}
              />
			  {/* <Text>PRICE :R50</Text>
			  <Text>NAME OF THE SALAD</Text> */}

</TouchableOpacity>

<TouchableOpacity style={{with:60, marginBottom:20}} >
			  	<Image
                style={{
                  width: 60,
                  height: 70,
                  borderRadius:100,
                  marginRight: 30,
                }}
                source={require("../../assets/resturant/pexels-photo-1633578.jpeg")}
              />

</TouchableOpacity>

<TouchableOpacity style={{with:60, marginBottom:20}} >
			    	<Image
                style={{
                  width: 60,
                  height: 70,
                  borderRadius:100,
                  marginRight: 30,
                }}
                source={require("../../assets/resturant/pexels-photo-315755.jpeg")}
              />
              </TouchableOpacity>

              <TouchableOpacity style={{with:60, marginBottom:20}} >
			    	<Image
                style={{
                  width: 60,
                  height: 70,
                  borderRadius:100,
                  marginRight: 30,
                }}
                source={require("../../assets/resturant/pexels-photo-1410235.jpeg")}
                
              />
              </TouchableOpacity>
</View>


 <View style={{flex: 1, 
                flexDirection: "row",
                borderTopLeftRadius: 30, 
                borderTopRightRadius: 30,
                backgroundColor:'white'}}>

		<View style={{flex: 2, flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
     <Text style={{justifyContent:'center',alignItems:'center',marginBottom: 10,justifyContent:'space-between'}}>Meal Deals</Text>
<TouchableOpacity>
<Image  style={{
                paddingLeft:10,
                flexDirection: "row",
				flex:1,
                justifyContent: "space-between",
				height:200,
				width:200,
				justifyContent:'space-between',
				borderRadius:20,
	
              }} source={require("../../assets/resturant/yoav-aziz-AiHJiRCwB3w-unsplash.jpeg")}
		
			  />
</TouchableOpacity>

<TouchableOpacity>
<Image  style={{
                paddingLeft:10,
                flexDirection: "row",
				flex:1,
                justifyContent: "space-between",
				height:200,
				width:200,
				justifyContent:'space-between',
				borderRadius:20,
	
              }} source={require("../../assets/resturant/yoav-aziz-AiHJiRCwB3w-unsplash.jpeg")}
		
			  />
</TouchableOpacity>
	

<TouchableOpacity>
<Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:200,
				width:200,
				justifyContent:'space-between',
				borderRadius:20
              }} source={require("../../assets/resturant/pexels-julie-aagaard-2097090.jpeg")}
			  />
</TouchableOpacity>

			  <br></br>
        <TouchableOpacity>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }}
			   source={require("../../assets/resturant/pexels-cottonbro-3297801.jpg")}
			  />
        </TouchableOpacity>
		
			  
</View>
</View>

<br></br>
<View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
        <Text style={{justifyContent:'center',alignItems:'center'}}>BURGER</Text>
        <TouchableOpacity>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }} 
			  source={require("../../assets/resturant/pexels-photo-327158.jpeg")}
			  />
        </TouchableOpacity>

			  <br></br>
        <TouchableOpacity>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }}
			   source={require("../../assets/resturant/pexels-photo-1633578.jpeg")}
			  />
        </TouchableOpacity>
			 
			  
			  <br></br>
        <TouchableOpacity>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }}  source={require("../../assets/resturant/pexels-photo-3630141.webp")}
		
			  />
        </TouchableOpacity>
		
			  
	 </View>
	 <br></br>
	 <br></br>
	 <br></br>
	 <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
     <Text style={{justifyContent:'center',alignItems:'center'}}>DRINKS</Text>
     <TouchableOpacity>
     <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }} 
			  source={require("../../assets/resturant/pexels-photo-338713.webp")}
			  />
     </TouchableOpacity>

			  <br></br>
        <TouchableOpacity>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
              }}
			   source={require("../../assets/resturant/pexels-photo-602750.jpeg")}
			  />
        </TouchableOpacity>
		
			  {/* <Text>Alcohol</Text> */}
			 <br></br> 
			<TouchableOpacity>
      <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				justifyContent:'space-between',
				borderRadius:20
				
              }} 
			  source={require("../../assets/resturant/pexels-photo-1564534.webp")}
			  />
      </TouchableOpacity>
		
			{/* <Text>cockTAIL</Text>   */}
    </View>
	<br></br>
	<br></br>
	<View style={styles.lgn}>
            <TouchableOpacity  onPress={() => navigation.navigate('Card')} >
            <Text style={{color:'black',backgroundColor:'#0faf9a',width:189,height:40,borderRadius:20,padding:10}} >You Can Order now</Text>
            </TouchableOpacity>
         </View>
 </View>
	 )
 }

 
const styles = StyleSheet.create({
    container: {       flex: 1,
      backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
	   maxWidth:1000,
	   maxHeight:2000,
	   height:650,
	   width:890,
	   width:'100%',
	   height:50,
	
	   borderRadius:8,
	  

     },
 
     salads:{
         backgroundColor:'#DFF1F3',
         alignItems:'center',
         borderRadius:10,
		 paddingLeft:30

    },
     burgers:{
         backgroundColor:'#DFF1F3',
         alignItems:'center',
         borderRadius:10,
         paddingLeft:20

     },
     drinks:{
       backgroundColor:'#DFF1F3',
         alignItems:'center',
         borderRadius:10,
     },
     btn:{
     marginBottom:100
    },
	searchInput :{
		width:300,
		height:30,
		paddingLeft:8,
		fontSize:16,
		borderRadius:10
	},
	categories:{
		backgroundColor:'#DFF1F3'

		
}
	
   });

export default Home


