import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../Screen/HomeScreen";
import PaymentScreen from "../../Screen/PaymentScreen";
import ShippingScreen from "../../Screen/ShippingScreen";
import SingleProductScreen from "../../Screen/SingleProductScreen";
import OrderModel from "../OrderModel";
import PlaceOrderModule from "../PlaceOrderModule";

const StackNatigation = () => {
  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProductScreen} />
        <Stack.Screen name="Shipping" component={ShippingScreen} />
        <Stack.Screen name="Checkout" component={PaymentScreen} />
        <Stack.Screen name="PlaceOrderModule" component={PlaceOrderModule} />
        <Stack.Screen name="OrderModel" component={OrderModel} />


      </Stack.Navigator>
  );
};
export default StackNatigation;
