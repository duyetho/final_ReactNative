import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Orders from "./Orders";
import Profile from "./Profile";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});
const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);
  const rederTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: "black" }}
      activeColor={"white"}
      inactiveColor={"white"}
      renderLabel={({ route, color }) => {
        <Text style={{ color, ...styles.text }}>{route.title}</Text>;
      }}
    />
    );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    //   renderTabBar={rederTabsBar}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  tabStyle: {
    backgroundColor: "white",
    color: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
  },
});
export default Tabs;
