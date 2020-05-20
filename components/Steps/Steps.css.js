import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  box: { width: "70%" },
  labelsBox: { height: 25, flexDirection: "row" },
  stepsBox: {
    height: 10,
    borderRadius: 5,
    paddingHorizontal: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.sixth,
  },
  labels: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  steps: {
    borderRadius: 5,
    height: "80%",
    backgroundColor: COLORS.third,
  },
});

export default styles;
