import { createStackNavigator } from "@react-navigation/stack";
import DrawerScreen from "./Drawer";
import React from "react";
import { Welcome, Login, SignUp, SignUpForm, SignUpEnd } from "../screens";

const WelcomeStack = createStackNavigator();
const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <WelcomeStack.Screen name="Login" component={Login} />
      <WelcomeStack.Screen name="SignUp" component={SignUp} />
      <WelcomeStack.Screen name="SignUpForm" component={SignUpForm} />
      <WelcomeStack.Screen name="SignUpEnd" component={SignUpEnd} />
      <WelcomeStack.Screen
        name="Drawer"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
    </WelcomeStack.Navigator>
  );
};
export default WelcomeStackScreen;
