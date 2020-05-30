import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "../screens";

const SigUpStack = createStackNavigator();
const SignUpStackNav = () => {
  return (
    <SigUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SigUpStack.Screen name="SignUp" component={Screens.SignUp} />
      <SigUpStack.Screen name="SignUpS1" component={Screens.SignUpS1} />
      <SigUpStack.Screen name="SignUpS2" component={Screens.SignUpS2} />
      <SigUpStack.Screen name="SignUpS3" component={Screens.SignUpS3} />
    </SigUpStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackNav = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={Screens.Search} />
      <SearchStack.Screen name="SearchS1" component={Screens.SearchS1} />
      <SearchStack.Screen name="SearchS2" component={Screens.SearchS2} />
      <SearchStack.Screen name="Result" component={Screens.Result} />
    </SearchStack.Navigator>
  );
};

const MenuDrawer = createDrawerNavigator();
const MenuDrawerNav = () => {
  return (
    <MenuDrawer.Navigator initialRouteName="Menu">
      <MenuDrawer.Screen name="Menu" component={Screens.Menu} />
      <MenuDrawer.Screen name="Plan" component={Screens.Plan} />
      <MenuDrawer.Screen name="Places" component={Screens.Places} />
      <MenuDrawer.Screen name="Events" component={Screens.Events} />
      <MenuDrawer.Screen name="Search" component={SearchStackNav} />
    </MenuDrawer.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackNav = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Welcome" component={Screens.Welcome} />
      <RootStack.Screen name="Login" component={Screens.Login} />
      <RootStack.Screen name="Event" component={Screens.Event} />
      <RootStack.Screen name="SignUp" component={SignUpStackNav} />
      <RootStack.Screen name="Menu" component={MenuDrawerNav} />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};

export default Navigation;
