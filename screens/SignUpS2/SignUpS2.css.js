import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 8,
  },
  mid: { flex: 1, justifyContent: "center", alignItems: "center" },
  bot: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 3,
  },
  inputsBox: { width: "100%", alignItems: "center", marginBottom: 20 },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
