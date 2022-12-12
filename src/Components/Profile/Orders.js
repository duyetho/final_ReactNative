import { View, Text, StyleSheet } from "react-native";
const Orders = () => {
  return (
    <View style={styles.container}>
        {/* Paid Order */}
      <View style={styles.order}>
        <Text style={styles.txtnu}>1234567899000</Text>
        <Text style={styles.txtpa}>PAID</Text>
        <Text style={styles.date}>Jan 15 2002</Text>
        <Text style={styles.btnPaid}>$645</Text>
      </View>
    {/* Not Paid Order */}
    <View style={styles.order}>
        <Text style={styles.txtnu}>1234567899000</Text>
        <Text style={styles.txtpa}>NOT PAID</Text>
        <Text style={styles.date}>SEP 15 2002</Text>
        <Text style={styles.btnPail}>$645</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6eda5",
    padding: 10,
  },
  order: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop: 10
  },
  txtnu: {
    fontSize: 13,
    color: "black",
    marginTop:1
  },
  txtpa:{
    color: "black",
    fontWeight: "bold",
    fontSize: 15
  },
  date:{
    fontSize:13,

  },
  btnPaid:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    borderRadius: 20,
    color:"white"
  },
  btnPail:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "red",
    borderRadius: 20,
    color:"white"
  }
});
export default Orders;
