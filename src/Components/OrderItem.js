import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Products from "../data/Products";
const OrderItem = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Products.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <View style={styles.orderCon}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100 }}
              />
              <View style={styles.orderxt}>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}
                >
                  {item.name}
                </Text>
                <Text style={{ fontSize: 15 }}>${item.price}</Text>
              </View>
              <View style={styles.orderxt}><Text style={{marginLeft:130, padding:10, backgroundColor:"red", borderRadius:5}}>5</Text></View>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red"
  },
  order: {
    // alignItems:"center",
    overflow: "hidden",
    shadowColor: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  orderCon: {
    flexDirection: "row",
  },
  orderxt: {
    marginLeft: 20,
    fontSize: 20,
    justifyContent: "center",
  },
});
export default OrderItem;
