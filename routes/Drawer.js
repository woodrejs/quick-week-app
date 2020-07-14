import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MapStackScreen from "./Map";
import SearchStackScreen from "./Search";
import PlanStackScreen from "./Plan";
import PlacesStackScreen from "./Places";
import EventsStackScreen from "./Events";
import MenuStackScreen from "./Menu";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Menu">
      <Drawer.Screen name="Menu" component={MenuStackScreen} />
      <Drawer.Screen name="Map" component={MapStackScreen} />
      <Drawer.Screen name="Plan" component={PlanStackScreen} />
      <Drawer.Screen name="Events" component={EventsStackScreen} />
      <Drawer.Screen name="Places" component={PlacesStackScreen} />
      <Drawer.Screen name="Search" component={SearchStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
