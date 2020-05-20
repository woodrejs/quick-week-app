import React from "react";
import { StyleSheet, View } from "react-native";

//import Start from "./screens/Start";
//import Login from "./screens/Login";
//import SignUp from "./screens/SignUp";
//import SignUpS2 from "./screens/SignUpS2";
//import SignUpS1 from "./screens/SignUpS1";
//import Welcome from "./screens/Welcome";
//import Menu from "./screens/Menu";
import Search from "./screens/Search";

export default App = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
