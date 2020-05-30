import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 7,
  },
  mid: { flex: 1, justifyContent: "center", alignItems: "center" },
  bot: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 2,
  },
  box: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
    justifyContent: "center",
  },
  checkBox: {
    height: 40,
    width: 280,
    justifyContent: "flex-start",
  },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
