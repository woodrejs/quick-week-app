import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Places, Event } from "../screens";

const PlacesStack = createStackNavigator();
const PlacesStackScreen = () => {
  return (
    <PlacesStack.Navigator>
      <PlacesStack.Screen name="Places" component={Places} />
      <PlacesStack.Screen name="Event" component={Event} />
    </PlacesStack.Navigator>
  );
};

export default PlacesStackScreen;
