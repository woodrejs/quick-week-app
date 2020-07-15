import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Menu } from "../screens";
import Header from "../components/Header";

const MenuStack = createStackNavigator();
const options = ({ navigation }) => {
  return {
    headerTitle: () => <Header navigation={navigation} />,
  };
};
const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={Menu} options={options} />
    </MenuStack.Navigator>
  );
};
export default MenuStackScreen;
