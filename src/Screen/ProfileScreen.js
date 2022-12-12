import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, StyleSheet , Text} from "react-native";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Tabs from "../Components/Profile/Tabs";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <FontAwesomeIcon
          icon={faUser}
          style={{
            color: "white",
            padding: 20,
            backgroundColor: "#ffb344",
            borderRadius: 50,
          }}
          size={40}
        />
        <Text style={styles.txtUser}>ADMIN</Text>
        <Text style={styles.date}>Jan 15 2002</Text>
      </View>
     <Tabs/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    height: 150,
  },
  txtUser:{
    color: "white",
    fontWeight: "bold",
    marginTop:10
  },
  date:{
    fontSize: 12,
    color: "white",
    marginTop:5
  }
});
export default ProfileScreen;
