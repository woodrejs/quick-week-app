import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
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
}) => {
  const btnStyle = useMemo(
    () => ({
      ...styles.btn,
      ...{ height, width, backgroundColor: bckColor },
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
    <TouchableOpacity onPress={onPress}>
      <View style={btnStyle}>
        {component}
        <Txt weight={600} customStyle={txtStyle}>
          {title}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
