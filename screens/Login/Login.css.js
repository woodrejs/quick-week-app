import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%" },
  inputsBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 5,
  },
  inputBox: { marginBottom: 25 },
  inputSize: {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
  },
  btnBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 4,
    marginTop: "10%",
  },
});

export default styles;
