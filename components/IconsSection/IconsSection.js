import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import QwIcon from "../../img/logo/lg_white.svg";
import HeartIcon from "../../img/heart/heart_white.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";

const IconsSection = ({ customStyle, iconSize, heartIcon, quickIcon }) => {
  return (
    <View style={{ ...styles.box, ...customStyle }}>
      {heartIcon && (
        <TouchableOpacity style={styles.topIcon}>
          <HeartIcon height={iconSize} width={iconSize} />
        </TouchableOpacity>
      )}
      {quickIcon && (
        <TouchableOpacity>
          <QwIcon height={iconSize} width={iconSize} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default IconsSection;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topIcon: { marginBottom: DIMENSIONS.height * 0.04 },
});
