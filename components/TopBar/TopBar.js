import React from "react";
import { View, Text } from "react-native";
import styles from "./TopBar.css";

/*
+isLogged zamiescic w store, 
*/

const TopBar = ({ title, isLogged }) => {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>{title}</Text>
      {isLogged && <Text style={styles.user}>login</Text>}
    </View>
  );
};

export default TopBar;
