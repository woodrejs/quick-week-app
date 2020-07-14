import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Plan, Event } from "../screens";

const PlanStack = createStackNavigator();
const PlanStackScreen = () => {
  return (
    <PlanStack.Navigator>
      <PlanStack.Screen name="Places" component={Plan} />
      <PlanStack.Screen name="Event" component={Event} />
    </PlanStack.Navigator>
  );
};

export default PlanStackScreen;
