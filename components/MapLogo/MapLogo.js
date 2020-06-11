import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Logo from "../../img/logo/lg_red.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";

const MapLogo = () => {
  return (
    <TouchableHighlight style={styles.box}>
      <View style={styles.circle}>
        <Logo
          height={DIMENSIONS.height * 0.08}
          width={DIMENSIONS.height * 0.08}
        />
      </View>
    </TouchableHighlight>
  );
};

export default MapLogo;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    marginLeft: DIMENSIONS.width * 0.05,
    marginTop: DIMENSIONS.width * 0.05,
  },
  circle: {
    width: DIMENSIONS.height * 0.1,
    height: DIMENSIONS.height * 0.1,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
