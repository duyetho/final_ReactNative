import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useNavigation from "use-navigation";
const HomeSearch = () => {
//   const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <TextInput style={styles.input} placeholder={"Search...."} />
      {/* <Pressable onPress ={()=>navigation.navigate("cart")}> */}
        <FontAwesomeIcon style={styles.icon} icon={faCartShopping} size={25} />
        <Text style={styles.txt}>3</Text>
      {/* </Pressable> */}
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#B43104",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "80%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  icon: {
    color: "white",
    marginTop: 20,
    paddingLeft: 5,
  },
  txt: {
    color: "white",
    fontWeight: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 1,
    paddingTop: 1,
    backgroundColor: "red",
    borderRadius: 30,
  },
});

export default HomeSearch;
