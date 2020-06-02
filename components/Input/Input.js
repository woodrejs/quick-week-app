import React from "react";
import { View, TextInput } from "react-native";
import Txt from "../Txt";
import styles from "./Input.css";

const Input = ({ label, size }) => {
  return (
    <View style={styles.container}>
      <Txt weight={500} customStyle={{ ...styles.label, ...size }}>
        {label}
      </Txt>
      <TextInput style={{ ...styles.input, ...size }} />
    </View>
  );
};

export default Input;
