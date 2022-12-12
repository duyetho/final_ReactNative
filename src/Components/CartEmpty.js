import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet} from "react-native";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Buttone from "./Buttone";
const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <FontAwesomeIcon
          style={{
            padding: 50,
            backgroundColor: "red",
            color: "white",
            borderRadius: 100,
          }}
          icon={faCartShopping}
          size={50}
        />
        <Text style={styles.txt}>CART IS EMPTY</Text>
      </View>
      <Buttone children="START SHOPPING"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
  },
  cart: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f6eda5",
    width: "100%",
  },
  txt: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    color:"red"
  },
});
export default CartEmpty;
