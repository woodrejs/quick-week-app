import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  box: { width: "70%" },
  top: { flexDirection: "row" },
  bot: {
    backgroundColor: COLORS.sixth,
    height: 8,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 10,
  },
  step: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  item: {
    backgroundColor: COLORS.third,
    width: "50%",
    height: 4,
    marginHorizontal: 2,
  },
});

export default styles;
