import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  container: { width: "70%" },
  label: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  picker: {
    flex: 3,
    marginRight: 10,
    backgroundColor: "white",
    borderColor: COLORS.sixth,
  },
});

export default styles;
