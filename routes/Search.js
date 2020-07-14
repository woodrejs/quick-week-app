import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Event } from "../screens";

const screens = {
  Search: {
    screen: Search,
  },
  Event: {
    screen: Event,
  },
};

const SearchStack = createStackNavigator(screens);

export default NavigationContainer(SearchStack);
