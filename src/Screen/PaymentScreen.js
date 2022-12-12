import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const PaymentScreen = ({ navigation }) => {
  const paymentMethodes = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
      alt: "paypai",
    },
    {
      img: "https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/C0432D7C-3E41-44F7-848FA909FCC04175/webimage-7D7537C9-9FB3-451C-B52D4436F1E58D64.jpg",
      alt: "Discover",
    },
    {
      img: "https://exchange4media.gumlet.io/news-photo/111562-googlepay.jpg?w=400&dpr=2.6",
      alt: "Google payment",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.delive}>
        <Text style={styles.txtDe}>PAYMENT METHOD</Text>
      </View>
      {/* Select payment method */}
      <View style={styles.shipping}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {paymentMethodes.map(function (value, index) {
            return (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "95%",
                  flexDirection: "row",
                  padding: 20,
                  marginLeft: 10,
                  marginRight: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  color: "white",
                }}
              >
                <Image
                  source={{ uri: value.img }}
                  style={{ width: 150, height: 30, marginTop: 0 }}
                />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size={30}
                  style={{
                    backgroundColor: "red",
                    color: "#4ff977",
                    borderRadius: 25,
                    marginLeft: 140,
                  }}
                />
              </View>
            );
          })}

          <TouchableOpacity
            onPress={() => navigation.navigate("Shipping")}
            style={{
              textAlign: "center",
              marginTop: 5,
              backgroundColor: "black",
              padding: 15,
              borderRadius: 5,
              color: "white",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            CONTINUE
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Payment method is{" "}
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {" "}
              Paypal{" "}
            </Text>{" "}
            by default
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // width: "100%",
    // height: "30%",
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
    flex: 1,
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
export default PaymentScreen;
