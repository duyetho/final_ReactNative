import {View, Text,StyleSheet} from "react-native"
const Message = ({children})=>{
    return(
        <View  style={styles.message}>
            <Text style={styles.txt}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    message:{
        backgroundColor:"#f6eda5",
        marginLeft: 20,
        padding:5,
        marginTop:5,
    },
    txt:{
        color:"black",
        fontSize:12
    }
})
export default Message