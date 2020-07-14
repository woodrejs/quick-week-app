import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  top: {
    flex: 10,
    paddingTop: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bot: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "10%",
  },
  inputBox: { marginBottom: 25 },
  inputSize: {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
  },
});

export default styles;
