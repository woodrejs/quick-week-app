import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  container: { width: "70%" },
  label: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
  },
  input: {
    width: "100%",
    height: 42,
    borderColor: COLORS.sixth,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "7%",
    paddingHorizontal: "5%",
  },
});

export default styles;
