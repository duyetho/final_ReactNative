import { View, Text, StyleSheet, TextInput } from "react-native";
const Profile = () => {
  const Inputs = [
    { lable: "USER NAME", type: "text" },
    { lable: "EMAIL", type: "text" },
    { lable: "PASSWORD", type: "password" }
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>User Name:</Text>
      <TextInput style={styles.input} placeholder={"User Name"} />
      <Text style={styles.txt}>Email:</Text>
      <TextInput style={styles.input} placeholder={"Email"} />
      <Text style={styles.txt}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder={"********"}
        secureTextEntry={true}
      />
      <Text style={styles.txt}>Confirm Password:</Text>
      <TextInput
        style={styles.input}
        placeholder={"********"}
        secureTextEntry={true}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          backgroundColor: "black",
          padding: 15,
          borderRadius: 5,
          color: "white",
        }}
      >
        UPDATE PROFILE
      </Text>
      
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
    width: "100%",
    padding: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 15,
    paddingLeft: 10,
    paddingRight: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  txt: {
    fontSize: 14,
    marginBottom: 5,
  },
});
export default Profile;
