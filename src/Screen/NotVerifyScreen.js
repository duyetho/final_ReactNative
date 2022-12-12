import React from 'react'
import { View , Text, Box, Image,StyleSheet,TextInput,Button} from 'react-native'


const NotVerifyScreen = () =>{
  return (
    <View style={styles.container} >
        <View>
        <Image
        source = {{
            uri: "https://as1.ftcdn.net/v2/jpg/03/19/55/14/500_F_319551430_ZUOs2DL29GDeSN7ua4rSpwF5VOQIB7Ha.jpg"
        }}
        style = {{ width: 200, height: 200 ,borderRadius:500, marginBottom:30  }}
        />
        </View>
        <Text style={{textAlign: "center",marginTop: 5, backgroundColor:"black", padding: 10,width:"50%", borderRadius: 5, color: "white"}}>LOGIN</Text> 
       <View>
        <Text style={{textAlign: "center",marginTop: 5, padding: 10,borderRadius: 5, color: "black"}}>REGISTER</Text>
       </View> 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "red",
        width:"100%"
    },
    input:{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 10,
        paddingLeft: 10,
        paddingRight: 100,
        marginBottom:10,
        borderRadius: 5
    },
    txt:{
        fontSize: 14,
        marginBottom: 5
    }
  });
export default NotVerifyScreen