import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import QwIcon from "../../img/logo/lg_white.svg";
import HeartIcon from "../../img/heart/heart_white.svg";

const IconsSection = ({ customStyle, iconSize }) => {
  return (
    <View style={{ ...styles.box, ...customStyle }}>
      <TouchableOpacity>
        <HeartIcon height={iconSize} width={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity>
        <QwIcon height={iconSize} width={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export default IconsSection;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
