import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screen/HomeScreen";
import ProfileScreen from "../../Screen/ProfileScreen";
import CartScreen from "../../Screen/CartScreen";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import StackNatigation from "./StackNatigation";
// const CustomTab = ({ children, onPress }) => (
//   <Pressable
//     style={[styles.btn, styles.buttonOpen]}
//     onPress={{onPress}}
//   >
//     {children}
//   </Pressable>
// );
function BottomNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNatigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: focused ? "red" : "black" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{padding:20, backgroundColor:"black", borderRadius:50}}>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: focused ? "red" : "white" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: focused ? "red" : "black" }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    elevation: 0,
    backgroundColor: "white",
    height: 40,
  },
});
export default BottomNav;
