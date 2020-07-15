import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Plan, Event } from "../screens";
import Header from "../components/Header";

const PlanStack = createStackNavigator();
const PlanStackScreen = () => {
  const options = ({ navigation }) => {
    return {
      headerTitle: () => <Header navigation={navigation} />,
    };
  };
  return (
    <PlanStack.Navigator>
      <PlanStack.Screen name="Places" component={Plan} options={options} />
      <PlanStack.Screen name="Event" component={Event} />
    </PlanStack.Navigator>
  );
};

export default PlanStackScreen;
