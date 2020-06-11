import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  lgBall: {
    width: DIMENSIONS.width * 0.25,
    height: DIMENSIONS.width * 0.25,
    backgroundColor: COLORS.fifth,
    margin: 10,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  smBall: {
    width: DIMENSIONS.width * 0.1,
    height: DIMENSIONS.width * 0.1,
    backgroundColor: COLORS.fifth,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default styles;
