import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Events, Event } from "../screens";

const EventsStack = createStackNavigator();
const EventsStackScreen = () => {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="Events" component={Events} />
      <EventsStack.Screen name="Event" component={Event} />
    </EventsStack.Navigator>
  );
};

export default EventsStackScreen;
