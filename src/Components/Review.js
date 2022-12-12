import { View, Text, StyleSheet, TextInput } from "react-native";
import Message from "./Notfications/Message";
import Rating from "./Rating";
import Select from "react-select";
const Review = () => {
  const options = [
    { value: "1", label: "1 - Poor" },
    { value: "2", label: "2 - Fair" },
    { value: "3", label: "3 - Good" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Review</Text>
      {/* <Message children="NO REVIEW" /> */}
      <View style={styles.reviewOne}>
        <View style={styles.review}>
          <Text style={styles.rUse}>User Doe</Text>
          <Rating />
        </View>
        <Text style={styles.date}>Jan 12 2022</Text>
        <Message
          children="since the component is dependant on react-native-pixel-perfect, when
         installing this package you install also react-native-pixel-perfect if
         it's not already installed."
        />
      </View>
      {/* <View style={styles.rProduct}>
        <Text style={styles.txtProduct}>Review This Product</Text>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              marginTop: 10,
              marginBottom: 3,
            }}
          >
            Rating
          </Text>
          <Select style={{ padding: 20, marginBottom: 20 }} options={options} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              marginTop: 10,
              marginBottom: 3,
            }}
          >
            Comment
          </Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.btn}>
            <Text style={styles.btnCart}>SUBMIT</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.btnCart}>PLEASE LOGIN</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  reviewOne: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f6b0a7",
  },
  review: {
    flexDirection: "row",
  },
  rUse: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
  },
  date: {
    marginLeft: 20,
    marginBottom: 0,
    fontSize: 12,
  },
  txtProduct: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  textAreaContainer: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "white",
    marginBottom: 20,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    outlineColor: "none",
  },
  btn: {
    width: "100%",
    marginTop: 3,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 11,
  },
  btnCart: {
    color: "#fff",
    textAlign: "center",
  },
});
export default Review;
