import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Events, Event } from "../screens";

const screens = {
  Events: {
    screen: Events,
  },
  Event: {
    screen: Event,
  },
};

const EventsStack = createStackNavigator(screens);

export default NavigationContainer(EventsStack);
