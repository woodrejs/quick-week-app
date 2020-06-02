import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  label: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: DIMENSIONS.height * 0.021,
    letterSpacing: 2,
  },
  input: {
    borderColor: COLORS.sixth,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default styles;
