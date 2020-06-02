import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    height: DIMENSIONS.height * 0.05,
    marginBottom: 2,
    borderWidth: 2,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: DIMENSIONS.height * 0.015,
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
});
export default styles;
