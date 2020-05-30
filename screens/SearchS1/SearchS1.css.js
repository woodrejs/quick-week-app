import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flex: 8,
    paddingTop: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bot: {
    flex: 4,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  txt: {
    textAlign: "left",
    marginBottom: 20,
    width: "70%",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  box: { marginVertical: 10 },
  list: { height: "40%" },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
