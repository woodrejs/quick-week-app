import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ball: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1.5,
  },
  empty: { borderColor: COLORS.sixth, backgroundColor: COLORS.fourth },
  fill: { borderColor: COLORS.first, backgroundColor: COLORS.first },
});

export default styles;
