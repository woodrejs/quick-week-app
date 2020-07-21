import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    height: "40%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.fourth,
    borderRadius: 5,
  },
  txtBox: { width: DIMENSIONS.width * 0.8, marginBottom: 40 },
  txt: { fontSize: DIMENSIONS.height * 0.022 },
  btn: { width: DIMENSIONS.width * 0.8, height: DIMENSIONS.height * 0.07 },
  primaryBtn: { backgroundColor: COLORS.first, marginBottom: 20 },
  secoundaryBtn: { backgroundColor: COLORS.fourth },
});
export default styles;
