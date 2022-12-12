import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderInfor from "../Components/OrderInfor";
import OrderItem from "../Components/OrderItem"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import PlaceOrderModule from "../Components/PlaceOrderModule";
const PlaceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OrderInfor
            title="CUSTOMER"
            subTitle="Ngo Thi Tron"
            tetx="admin@gmail.com"
            icon={<FontAwesomeIcon icon={faUser} size={30} style={{color: 'white'}}/>}
          />
          <OrderInfor
            title="SHIPPING INFOR"
            subTitle="Shipping: Tanzania"
            tetx="Pay Method: Paypal"
            icon={<FontAwesomeIcon icon={faTruck} size={30} style={{color: 'white'}}/>}
          />
          <OrderInfor
            title="DELIVER TO"
            subTitle="Address: Da Nang"
            tetx="101b Le Huu Trac"
            icon={<FontAwesomeIcon icon={faLocation} size={30}  style={{color: 'white'}} />}
          />
        </ScrollView>
      </View>
      {/* Order Item */}

      <View style={styles.containerProduct}>
        <Text style={styles.txtProduct}>PRODUCTS</Text>
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        >
          <OrderItem/>
          </ScrollView>
        
        {/* Total */}
        <PlaceOrderModule/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
    padding: 10
  },
  txtProduct:{
    fontSize: 20,
    fontWeight:"bold",
    color:"black",
    marginTop: 10
  }
});
export default PlaceScreen;
