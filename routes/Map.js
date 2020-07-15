import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Map, Event } from "../screens";
import Header from "../components/Header";

const MapStack = createStackNavigator();
const options = ({ navigation }) => {
  return {
    headerTitle: () => <Header navigation={navigation} />,
  };
};
const MapStackScreen = () => {
  return (
    <MapStack.Navigator initialRouteName="Map">
      <MapStack.Screen name="Map" component={Map} options={options} />
      <MapStack.Screen name="Event" component={Event} />
    </MapStack.Navigator>
  );
};

export default MapStackScreen;
