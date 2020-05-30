import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  container: { width: "70%" },
  label: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: 13,
    letterSpacing: 2,
  },
  input: {
    borderColor: COLORS.sixth,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "7%",
    paddingHorizontal: "5%",
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
