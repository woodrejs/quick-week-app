import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Places, Event } from "../screens";

const screens = {
  Places: {
    screen: Places,
  },
  Event: {
    screen: Event,
  },
};

const PlacesStack = createStackNavigator(screens);

export default NavigationContainer(PlacesStack);
