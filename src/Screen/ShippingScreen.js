import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native';

const ShippingScreen = ({navigation}) => {
  const ShippingInputs = [
    {
      lable: "ENTER CITY",
      type: "text",
    },
    {
      lable: "ENTER COUNTRY",
      type: "text",
    },
    {
      lable: "ENTER POSTAL CODE",
      type: "text",
    },
    {
      lable: "ENTER ADDRESS",
      type: "text",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.delive}>
        <Text style={styles.txtDe}>DELIVERY ADDRESS</Text>
      </View>
      <View style={styles.shipping}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {ShippingInputs.map(function (value, index) {
            return (
              <View key={index}>
                <Text style={styles.txtCity}>{value.lable}</Text>
                <TextInput
                  style={styles.input}
                  placeholder={value.lable}
                  type={value.type}
                />
              </View>
            );
          })}
          <TouchableOpacity  onPress ={()=>navigation.navigate("OrderScreen")}
            style={{
              textAlign: "center",
              marginTop: 5,
              backgroundColor: "black",
              padding: 15,
              borderRadius: 5,
              color: "white",
              marginLeft: 10,
              marginRight: 10
            }}
          > 
          
           CONTINUE
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    height: "30%",
    // alignItems: 'center',
  },
  delive: {
    backgroundColor: "red",
    width: "100%",
    height: "10%",
  },
  txtDe: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  shipping: {
    backgroundColor: "#f6eda5",
    width: "100%",
    height: "90%",
  },
  txtCity: {
    color: "black",
    fontSize: 15,
    marginTop: 5,
    padding: 10,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    width: "95%",
    backgroundColor: "#ffffff",
    padding: 15,
    paddingLeft: 10,
    paddingRight: 100,
    marginBottom: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 20,
  },
});
export default ShippingScreen;
