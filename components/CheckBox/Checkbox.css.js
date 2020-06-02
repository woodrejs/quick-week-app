import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  box: { marginRight: 7 },
  txt: {
    textAlign: "left",
    fontSize: DIMENSIONS.height * 0.018,
    textTransform: "uppercase",
  },
});

export default styles;
