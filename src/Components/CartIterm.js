import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {View, Text, StyleSheet} from "react-native"
import { SwipeListView } from 'react-native-swipe-list-view';
import Products from "../data/Products";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Swiper = () =>{
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={Products.slice(0,2)}
    renderHiddenItem={renderHiddenItems}
    renderItem={renderIterms}
    showsVerticalScrollIndicator={false}
    />
}
const renderIterms = () =>{
    return(
        <View>
            <View style={{alignItems:"center", backgroundColor:"white", overflow:"hidden",width:50 }}>
                <Image source={{uri: data.item.image}} style={{width:30, height:50}}/>
            </View>
        </View>
    )
}
const renderHiddenItems = ()=>{
    return(
        <View>
            <View style={{alignItems:"center", backgroundColor:"white", overflow:"hidden", width:50 }}>
               <FontAwesomeIcon icon={faTrash} size={25}/>
            </View>
        </View>
    )
}
const CartIterm = ()=>{
    return (
        <View style={styles.container}>
           <Swiper/>
           <Text>ok</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        fex: 1
    }
})
export default CartIterm