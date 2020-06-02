import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: { borderRadius: 5 },
  btn: {
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txt: {
    letterSpacing: 1,
    fontSize: DIMENSIONS.height * 0.016,
    textTransform: "uppercase",
  },
});

export default styles;
