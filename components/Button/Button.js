import React, { useMemo } from "react";
import { View, TouchableHighlight } from "react-native";
import Txt from "../Txt";
import styles from "./Button.css";

const Button = ({
  bckColor,
  txtColor,
  height,
  width,
  title,
  component,
  onPress,
  radius,
}) => {
  const btnStyle = useMemo(
    () => ({
      ...styles.btn,
      ...{ height, width, backgroundColor: bckColor },
      ...radius,
    }),
    [height, width, bckColor]
  );
  const txtStyle = useMemo(() => {
    if (component) {
      return {
        ...styles.txt,
        ...{ color: txtColor, marginLeft: 10 },
      };
    } else {
      return {
        ...styles.txt,
        ...{ color: txtColor },
      };
    }
  }, [txtColor, component]);
  return (
    <TouchableHighlight onPress={onPress} style={{ ...styles.box, ...radius }}>
      <View style={btnStyle}>
        {component}
        <Txt weight={600} customStyle={txtStyle}>
          {title}
        </Txt>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
