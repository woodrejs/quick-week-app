import React, { useMemo } from "react";
import { View, TouchableHighlight } from "react-native";
import Txt from "../Txt";
import styles from "./Button.css";

const Button = ({ customStyle, onPress, icon, title, radius, txtColor }) => {
  const btnStyle = useMemo(() => ({ ...styles.btn, ...customStyle }), [
    customStyle,
  ]);
  const txtStyle = useMemo(() => ({ ...styles.txt, ...{ color: txtColor } }), [
    txtColor,
  ]);
  const boxStyle = useMemo(() => ({ ...styles.box, ...radius }), [radius]);

  return (
    <TouchableHighlight onPress={onPress} style={boxStyle}>
      <View style={btnStyle}>
        {icon}
        <Txt weight={600} customStyle={txtStyle}>
          {title}
        </Txt>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
