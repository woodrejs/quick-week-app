import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Events, Event } from "../screens";
import Header from "../components/Header";

const EventsStack = createStackNavigator();
const EventsStackScreen = () => {
  const options = ({ navigation }) => {
    return {
      headerTitle: () => <Header navigation={navigation} />,
    };
  };
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="Events" component={Events} options={options} />
      <EventsStack.Screen name="Event" component={Event} />
    </EventsStack.Navigator>
  );
};

export default EventsStackScreen;
