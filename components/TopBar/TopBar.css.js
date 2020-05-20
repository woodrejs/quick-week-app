import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    textTransform: "uppercase",
    marginLeft: "5%",
  },
  user: {
    marginRight: "5%",
  },
});

export default styles;
