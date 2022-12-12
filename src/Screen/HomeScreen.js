import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import HomeProduct from '../Components/HomeProduct';
import HomeSearch from '../Components/HomeSearch';

const HomeScreen = ({navigation}) =>{
  return (
    <View style={styles.container} >
        <HomeSearch/>
        <HomeProduct navigation = {navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#FBF5EF",
      width:"100%"
  }
});

export default HomeScreen