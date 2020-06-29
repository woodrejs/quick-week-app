import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: { justifyContent: "flex-end" },
  checkboxsBox: {
    width: DIMENSIONS.width * 0.75,
    flexDirection: "row",
    marginTop: DIMENSIONS.height * 0.04,
    marginBottom: DIMENSIONS.height * 0.06,
  },
  btnBox: { justifyContent: "flex-start" },
  inputSize: {
    height: DIMENSIONS.height * 0.055,
    width: DIMENSIONS.width * 0.75,
  },
});

export default styles;
