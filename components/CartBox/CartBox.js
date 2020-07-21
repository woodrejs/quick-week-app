import React from "react";
import { View, StyleSheet } from "react-native";
import ImgBox from "../ImgBox";
import DIMENSIONS from "../../constans/DIMENSIONS";
import COLORS from "../../constans/COLORS";
import Txt from "../Txt";

const CartBox = ({ onPress, onLongPress, cornerTxt, middleTxt, image }) => {
  return (
    <ImgBox onPress={onPress} img={image} onLongPress={onLongPress}>
      <View style={styles.cornerBox}>
        <Txt weight={700} customStyle={styles.cornerTxt}>
          {cornerTxt}
        </Txt>
      </View>
      <View style={styles.middleBox}>
        <Txt weight={700} customStyle={styles.middleTxt}>
          {middleTxt}
        </Txt>
      </View>
    </ImgBox>
  );
};

export default CartBox;

const styles = StyleSheet.create({
  cornerBox: {
    position: "absolute",
    left: DIMENSIONS.width * 0.03,
    top: DIMENSIONS.width * 0.035,
  },
  cornerTxt: {
    textTransform: "uppercase",
    fontSize: DIMENSIONS.width * 0.04,
    lineHeight: DIMENSIONS.width * 0.04,
    color: COLORS.fourth,
    letterSpacing: 1,
    textAlign: "left",
  },
  middleBox: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  middleTxt: {
    textTransform: "uppercase",
    fontSize: DIMENSIONS.width * 0.15,
    color: COLORS.fourth,
    letterSpacing: 1,
    textAlign: "left",
  },
});
