import React from "react";
import { View } from "react-native";
import TopBar from "../TopBar";
import styles from "./MenuScreen.css";

//dodac islogged do stora !!!!!!!!!!!!!!

const MenuScreen = ({ title, children }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.bar}>
        <TopBar title={title} isLogged={true} />
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

export default MenuScreen;
