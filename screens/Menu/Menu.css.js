import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%" },
  top: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "10%",
    marginBottom: "5%",
  },
  mid: {
    flex: 2,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bot: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "12%",
  },
  txt: {
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

export default styles;
