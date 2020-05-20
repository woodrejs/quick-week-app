import React from "react";
import { View, Text, CheckBox } from "react-native";
import styles from "./Checkbox.css";

const Checkbox = ({ title }) => {
  return (
    <View style={styles.container}>
      <CheckBox style={styles.box} />
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default Checkbox;
