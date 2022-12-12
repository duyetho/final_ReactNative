
import { View, Text, StyleSheet } from "react-native";
const Buttone = ({ children, onPress }) => {
  return (
    <View onPress={{ onPress }} style={styles.btn}>
      <Text style={styles.btnCart}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnCart: {
    color: "#fff",
    textAlign: "center",
  },
});
export default Buttone;
