import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView,TouchableOpacity,Image} from 'react-native';

const products = [
  { _id: 1, name: 'salads', price: 50, quantity: 0 },
  { _id: 2, name: 'burgers', price: 29, quantity: 0 },
  { _id: 3, name: 'drinks', price: 30, quantity: 0 },
];

class Items extends React.Component {
  render() {
    const { item } = this.props;

    return (
        <View style={styles.container}>
          <Text>you Can Place Your Order Here</Text>
          <br></br>
          <br></br>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <Image  style={{
                paddingLeft:10,
                flexDirection: "row",
                justifyContent: "space-between",
				height:100,
				width:190,
				
              }} 
			  source={require("../../assets/resturant/pexels-photo-1564534.webp")}
			  />
          <Text>{item.name} - </Text>
          <Text>{item.price}</Text>
        
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <TouchableOpacity title="Subtract" onPress={this.props.onSubtract} >
            <Text  style={{color:'black',backgroundColor:'skyblue',width:100,height:40,borderRadius:20,padding:10}}>Subtract</Text>
            </TouchableOpacity> 
            <br></br>
          <Text>{item.quantity}</Text>
          <br></br>
          <TouchableOpacity title="Add" onPress={this.props.onAdd} >
            <Text  style={{color:'black',backgroundColor:'skyblue',width:100,height:40,borderRadius:20,padding:10}}>Add meal</Text>
            </TouchableOpacity>
            <View style={styles.logout}>
            <TouchableOpacity  onPress={Login} >
            <Text style={{color:'black',backgroundColor:'skyblue',width:189,height:40,borderRadius:20,padding:10}}>Back Home</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
      </View>
    )
  }
}

class Card extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <Items
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text>Total Quantity: R{totalQuantity}</Text>
        <Text>Total Price: R {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight:840,
      maxWidth:1000,
      height:896,
      width:424,
    },
  })