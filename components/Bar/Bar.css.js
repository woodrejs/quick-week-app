import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "5%",
  },
  box: { flex: 1, alignItems: "center" },
  txt: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: DIMENSIONS.height * 0.02,
  },
});

export default styles;
