import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Map, Event } from "../screens";

const screens = {
  Map: {
    screen: Map,
  },
  Event: {
    screen: Event,
  },
};

const MapStack = createStackNavigator(screens);

export default NavigationContainer(MapStack);
/*
const MapStack = createStackNavigator();
const MapStackScreen = () => {
  return (
    <MapStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Map"
    >
      <MapStack.Screen name="Map" component={Screens.Map} />
      <MapStack.Screen name="Event" component={Screens.Event} />
    </MapStack.Navigator>
  );
};
*/
