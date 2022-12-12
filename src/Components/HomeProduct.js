import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from 'react';
import Products from "../data/Products";
import useNavigation from "use-navigation";
import Rating from "./Rating";
import { TouchableOpacity } from 'react-native';
const HomeProduct = ({  navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiURL = 'https://62904135665ea71fe12f6eef.mockapi.io/products';
    fetch(apiURL)
        .then(res => res.json())
        .then(resJson => {
            setData(resJson);
        })     
}, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        {/* <Text>hhhhhhh</Text> */}
        {Products.map(function (data) {
          return (
            <View key={data.id} style={styles.conHome}>
              <TouchableOpacity  onPress ={() => navigation.navigate('Single')}>
              <Image tyle={styles.img}
                  source={{ uri: data.image }}
                  style={{ width: 150, height: 150, marginBottom: 20 }}
                  alt={data.name}
                />
                <Text style={styles.txtPrice}>${data.price}</Text>
                <Text style={styles.txtName}>{data.name}</Text>
                <Rating value ={data.rating}/>
              </TouchableOpacity>  
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  flex: {
    flexWrap: "wrap",
    writingDirection: "row",
    justifyContent: "space-between",
  },
  conHome: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    width: "47%",
    height: "20%",
    backgroundColor: "#f6eda5",
    justifyContent:"center",
    alignItems:"center",
    marginLeft: 5,
    marginRight: 5,
    marginTop: -40,
    borderRadius: 10,
    marginBottom:-15,

    // marginBottom:-5
  },
  txtPrice:{
    textAlign:"center",
    fontSize: 20,
    fontWeight: "bold"
  },
  txtName:{
    textAlign:"center",
    fontSize: 15,
  
  },
  
});
export default HomeProduct;
