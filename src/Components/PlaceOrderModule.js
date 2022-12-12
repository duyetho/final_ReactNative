import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Alert, Modal, Pressable, View, Text, StyleSheet } from "react-native";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import Buttone from "../Components/Buttone";
const PlaceOrderModule = () => {
  const OrdersInfor = [
    {
      title: "Product",
      price: 81,
      color: "white",
    },
    {
      title: "Shipping",
      price: 81,
      color: "black",
    },
    {
      title: "Tax",
      price: 81,
      color: "yellow",
    },
    {
      title: "Totol Amount",
      price: 81,
      color: "yellow",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={{ backgroundColor: "gray", width: 400, padding: 20, height:400 }}>
              <View style={styles.modalTop}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Products
                </Text>
                <Pressable
                  style={[styles.btnColose, styles.btnClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      size={20}
                      style={{
                        color: "black",
                        backgroundColor: "red",
                        padding: 10,
                      }}
                    />
                  </Text>
                </Pressable>
              </View>
              {OrdersInfor.map(function (value, index) {
                return (
                  <View style={styles.modalView} key={index}>
                    <Text style={styles.modalProduct}>{value.title}</Text>
                    <Text style={styles.modalText}>${value.price}</Text>
                  </View>
                );
              })}
              <Pressable
                style={[styles.btnPlace]}
              >
                <Text style={{color: "black", fontSize: 15, fontWeight:"bold", textAlign: "center"}}>PLACE AN ORDER</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.btn, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.btnCart}>TOTAL</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red"
    height: "100%",
  },
  btn: {
    width: "100%",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 100,
    marginBottom: -30,
  },
  btnPlace:{
    width: "97%",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 100,
    marginBottom: -30,
  },
  btnCart: {
    color: "#fff",
    textAlign: "center",
    padding: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalProduct: {
    fontSize: 18,
    fontWeight: "bold",
    // marginTop: -20,
    alignItems: "center",
  },
  btnClose: {
    color: "black",
    padding: 10,
  },
  modalTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    width: 350,
    marginTop: -20,
    alignItems: "center",
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    padding: 10,
    backgroundColor: "#f6eda5",
    width: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnColose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    textAlign: "center",
    alignItems: "center",
  },
});
export default PlaceOrderModule;
