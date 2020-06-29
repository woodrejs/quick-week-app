import React from "react";
import { View, TextInput } from "react-native";
import Txt from "../Txt";
import styles from "./Input.css";

const Input = ({ label, size, change }) => {
  const txtStyle = { ...styles.label, ...size };
  const inputStyle = { ...styles.input, ...size };
  return (
    <View style={styles.container}>
      <Txt weight={500} customStyle={txtStyle}>
        {label}
      </Txt>
      <TextInput onChangeText={(text) => change(text)} style={inputStyle} />
    </View>
  );
};

export default Input;
