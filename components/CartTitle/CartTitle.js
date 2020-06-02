import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Txt from "../Txt";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const CartTitle = ({ onPress, color, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.box, ...{ backgroundColor: color } }}>
        <Txt weight={700} customStyle={styles.txt}>
          {children}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

export default CartTitle;

const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: -20,
    left: "5%",
    right: "5%",
    position: "absolute",
    backgroundColor: COLORS.first,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  txt: {
    textTransform: "uppercase",
    fontSize: DIMENSIONS.height * 0.016,
    color: COLORS.fourth,
    letterSpacing: 1,
  },
});
