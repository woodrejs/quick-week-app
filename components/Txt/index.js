import React from "react";
import { Text } from "react-native";

const Txt = ({ children, customStyle, weight }) => {
  const styles = () => {
    if (weight === 500) return { fontFamily: "OpenSans-Regular" };
    else if (weight === 600) return { fontFamily: "OpenSans-SemiBold" };
    else return { fontFamily: "OpenSans-Bold" };
  };

  return <Text style={{ ...styles(), ...customStyle }}>{children}</Text>;
};

export default Txt;
