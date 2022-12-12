import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Buttone from "../Components/Buttone";
import CartEmpty from "../Components/CartEmpty";
import CartIterm from "../Components/CartIterm";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtCart}>Cart</Text>
      {/* If cart is empty  */}
      {/* <CartEmpty/> */}
      {/* CART ITEM */}
      <ScrollView>
        <CartIterm />
        <View style={styles.calcu}>
          <Buttone children="TOTAL" />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
  },
  txtCart: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

});
export default CartScreen;
