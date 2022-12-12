
import LoginScreen from './src/Screen/LoginSreen';
import RegisterScreen from './src/Screen/RegisterScreen';
import OrderScreen from "./src/Screen/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './src/Components/Navigations/BottomNav'
import PaymentScreen from './src/Screen/PaymentScreen';

const Stack = createNativeStackNavigator();
const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
        screenOptions={
          {
            headerShown:false,
          }
        }
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
export default App
