import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Plan, Event } from "../screens";

const screens = {
  Plan: {
    screen: Plan,
  },
  Event: {
    screen: Event,
  },
};

const PlanStack = createStackNavigator(screens);

export default NavigationContainer(PlanStack);
