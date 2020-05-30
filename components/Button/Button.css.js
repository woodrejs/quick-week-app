import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  txt: {
    letterSpacing: 1,
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default styles;
