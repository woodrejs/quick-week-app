import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.fourth,
    borderRadius: 2,
    marginRight: 4,
    marginBottom: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    fontSize: 10,
  },
});

export default styles;
