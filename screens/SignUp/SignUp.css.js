import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  mid: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 2,
  },
  bot: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  txt: {
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: "20%",
    letterSpacing: 1,
    marginBottom: "5%",
  },
});

export default styles;
