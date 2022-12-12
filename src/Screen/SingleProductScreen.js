import React from "react";
import { View, Text, StyleSheet, ScrollView, Image,Button } from "react-native";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import Review from "../Components/Review";
import { TouchableOpacity } from 'react-native';
const SingleProductScreen = ({navigation}) => {
  const [value, setValue] = useState(0);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{ uri: "https://loremflickr.com/640/480/abstract" }}
        />
        <Text style={styles.txt}>SingleProductScreen</Text>
      </View>
      <Rating style={{width:20}} />
      <View style={styles.numeri}>
        <Text style={styles.txtPrice}>$30</Text>
        <Text style={styles.txtDesc}>
          since the component is dependant on react-native-pixel-perfect, when
          installing this package you install also react-native-pixel-perfect if
          it's not already installed.if you're experiencing issues with
          react-native link which is used to install react-native-vector-icons
          please refer to react-native-vector-icons to see manual installation
          steps link to npm page
        </Text>
        <View style={styles.btn}>
          <TouchableOpacity  onPress ={()=>navigation.navigate("PaymentScreen")}  style={styles.btnCart}>ADD TO CART</TouchableOpacity>
        </View>
        <Review/>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
    padding:10
  },
  img: {
    width: "100%",
    height: 300,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center"
  },
  txtPrice: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  txtDesc: {
    fontSize: 15,
  },
  btn:{
    width:"100%",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnCart:{
    color: '#fff',
    textAlign: 'center',
  }
});
export default SingleProductScreen;
