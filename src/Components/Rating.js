import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { View, StyleSheet , Text} from "react-native"
const Rating =({value, text})=>{
    return(
        <View style={styles.container}>
            <FontAwesomeIcon 
            // name ={value >= 1 ? icon = {faStar} : value >= 0.5 ? icon ={faStar}: icon ={faStar}}
            style = {styles.icon } 
            icon ={faStar} ssize={15}
           />
            <FontAwesomeIcon 
            // name ={value >= 2 ? "start": value >= 1.5 ? "start-half-o": "start-o"}
            style = {styles.icon } 
            icon ={faStar} size={15}
           />
            <FontAwesomeIcon 
            // name ={value >= 3 ? "start": value >= 2.5 ? "start-half-o": "start-o"}
            style = {styles.icon } 
            icon ={faStar} size={15}
           />
            <FontAwesomeIcon 
            // name ={value >= 4 ? "start": value >= 3.5 ? "start-half-o": "start-o"}
            style = {styles.icon } 
            icon ={faStar} size={15}
           />
            <FontAwesomeIcon 
            // name ={value >= 5 ? "start": value >= 4.5 ? "start-half-o": "start-o"}
            style = {styles.icon } 
            icon ={faStar} size={15}
           />
           {text && (<Text>
            {text}
           </Text>)}
        </View>
    )
}
const styles = StyleSheet.create({
    icon:{
        color: "#e35915"
    },
    container:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems:"center",
    }
})
export default Rating