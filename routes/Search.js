import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Event, Result } from "../screens";
import Header from "../components/Header";

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  const options = ({ navigation }) => {
    return {
      headerTitle: () => <Header navigation={navigation} />,
    };
  };
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} options={options} />
      <SearchStack.Screen name="Result" component={Result} />
      <SearchStack.Screen name="Event" component={Event} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
