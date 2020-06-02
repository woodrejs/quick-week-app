import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  container: {
    height: DIMENSIONS.height * 0.3,
    marginVertical: 20,
    width: "100%",
    position: "relative",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
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
  iconsBox: {
    position: "absolute",
    right: DIMENSIONS.width * 0.035,
    top: DIMENSIONS.width * 0.035,
  },
});

export default styles;
