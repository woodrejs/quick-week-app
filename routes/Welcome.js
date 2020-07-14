import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuDrawerNavigator from "./Menu";
import { Welcome, Login, SignUp, SignUpForm, SignUpEnd } from "../screens";

const screens = {
  Welcome: {
    screen: Welcome,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  SignUpForm: {
    screen: SignUpForm,
  },
  SignUpEnd: {
    screen: SignUpEnd,
  },
  Menu: {
    screen: MenuDrawerNavigator,
  },
};

const WelcomeStack = createStackNavigator(screens);

export default NavigationContainer(WelcomeStack);
