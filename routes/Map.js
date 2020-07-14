import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Map, Event } from "../screens";

const MapStack = createStackNavigator();
const MapStackScreen = () => {
  return (
    <MapStack.Navigator initialRouteName="Map">
      <MapStack.Screen name="Map" component={Map} />
      <MapStack.Screen name="Event" component={Event} />
    </MapStack.Navigator>
  );
};

export default MapStackScreen;
