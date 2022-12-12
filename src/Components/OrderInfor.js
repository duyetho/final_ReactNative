import { icon, text } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const OrderInfor = ({icon, title, subTitle, tetx, success, danger }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfor}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "bold",
            backgroundColor: "red",
            width: 60,
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 30,
          }}
        >
          {icon}
          {/* <FontAwesomeIcon
            icon={icon}
            size={30}
            style={{ color: "white", padding: 0 }}
          /> */}
        </Text>
        <Text style={{ color: "black", fontSize: 13, marginBottom:5, marginTop:5, fontWeight:"bold" }}>{title}</Text>
        <Text style={{ color: "black", fontSize: 13 }}>{subTitle}</Text>
        <Text style={{ color: "black", fontSize: 13, textAlign: "center" }}>
          {tetx}
        </Text>
        {/* Status */}
        {success && (
          <View style={{ fontSize: 13, backgroundColor: "blue",padding:10, marginTop: 5, borderRadius:5 }}>
            <Text style={{ fontSize: 13, color: "white" }}>
              Paid on Jan 15 2002
            </Text>
          </View>
        )}
        {danger && (
          <View style={{ fontSize: 13, backgroundColor: "red",padding:10, marginTop: 5, borderRadius:5, paddingLeft:40, paddingRight:40 }}>
            <Text style={{ fontSize: 13, color: "white" }}>Not Deliver</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // width: "100%",
    // height: "30%",
    // alignItems: 'center',
  },
  orderInfor: {
    backgroundColor: "white",
    width: 200,
    shadowColor: 4,
    paddingBottom: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:5
  },
});
export default OrderInfor;
