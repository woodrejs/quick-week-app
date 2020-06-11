import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "../../screens";

const PlacesStack = createStackNavigator();
const PlaccesStackScreen = () => {
  return (
    <PlacesStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Places"
    >
      <PlacesStack.Screen name="Places" component={Screens.Places} />
      <PlacesStack.Screen name="Event" component={Screens.Event} />
    </PlacesStack.Navigator>
  );
};

const EventsStack = createStackNavigator();
const EventsStackScreen = () => {
  return (
    <EventsStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Events"
    >
      <EventsStack.Screen name="Events" component={Screens.Events} />
      <EventsStack.Screen name="Event" component={Screens.Event} />
    </EventsStack.Navigator>
  );
};
const PlanStack = createStackNavigator();
const PlanStackScreen = () => {
  return (
    <PlanStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Plan"
    >
      <PlanStack.Screen name="Plan" component={Screens.Plan} />
      <PlanStack.Screen name="Event" component={Screens.Event} />
    </PlanStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Search"
    >
      <SearchStack.Screen name="Search" component={Screens.Search} />
      <SearchStack.Screen name="Result" component={Screens.Result} />
      <SearchStack.Screen name="Event" component={Screens.Event} />
    </SearchStack.Navigator>
  );
};

const SigUpStack = createStackNavigator();
const SignUpStackScreen = () => {
  return (
    <SigUpStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignUp"
    >
      <SigUpStack.Screen name="SignUp" component={Screens.SignUp} />
      <SigUpStack.Screen name="SignUpForm" component={Screens.SignUpForm} />
      <SigUpStack.Screen name="SignUpEnd" component={Screens.SignUpEnd} />
    </SigUpStack.Navigator>
  );
};

const WelcomeStack = createStackNavigator();
const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <WelcomeStack.Screen name="Welcome" component={Screens.Welcome} />
      <WelcomeStack.Screen name="Login" component={Screens.Login} />
      <WelcomeStack.Screen name="SignUp" component={SignUpStackScreen} />
    </WelcomeStack.Navigator>
  );
};

const MenuDrawer = createDrawerNavigator();
const MenuDrawerScreen = () => {
  return (
    <MenuDrawer.Navigator initialRouteName="Menu">
      <MenuDrawer.Screen name="Menu" component={Screens.Menu} />
      <MenuDrawer.Screen name="Map" component={Screens.Map} />
      <MenuDrawer.Screen name="Plan" component={PlanStackScreen} />
      <MenuDrawer.Screen name="Places" component={PlaccesStackScreen} />
      <MenuDrawer.Screen name="Events" component={EventsStackScreen} />
      <MenuDrawer.Screen name="Search" component={SearchStackScreen} />
    </MenuDrawer.Navigator>
  );
};
// tmp map is first component
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Map"
    >
      <AuthStack.Screen name="Map" component={Screens.Map}></AuthStack.Screen>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeStackScreen}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Menu"
        component={MenuDrawerScreen}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
