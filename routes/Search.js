import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Event } from "../screens";

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Places" component={Search} />
      <SearchStack.Screen name="Event" component={Event} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
