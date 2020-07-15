import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Places, Event } from "../screens";
import Header from "../components/Header";

const PlacesStack = createStackNavigator();
const options = ({ navigation }) => {
  return {
    headerTitle: () => <Header navigation={navigation} />,
  };
};
const PlacesStackScreen = () => {
  return (
    <PlacesStack.Navigator>
      <PlacesStack.Screen name="Places" component={Places} options={options} />
      <PlacesStack.Screen name="Event" component={Event} />
    </PlacesStack.Navigator>
  );
};

export default PlacesStackScreen;
