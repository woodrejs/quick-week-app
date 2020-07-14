import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Menu } from "../screens";
import MapStack from "./Map";
import SearchStack from "./Search";
import PlanStack from "./Plan";
import PlacesStack from "./Places";
import EventsStack from "./Events";

const MenuDrawerNavigator = createDrawerNavigator({
  Menu: {
    screen: Menu,
  },
  Map: {
    screen: MapStack,
  },
  Search: {
    screen: SearchStack,
  },
  Plan: {
    screen: PlanStack,
  },
  Places: {
    screen: PlacesStack,
  },
  Events: {
    screen: EventsStack,
  },
});

export default NavigationContainer(MenuDrawerNavigator);
