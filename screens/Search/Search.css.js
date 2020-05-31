import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  top: { flex: 8, width: "100%", justifyContent: "center" },
  mid: { flex: 2, justifyContent: "center", alignItems: "center" },
  bot: {
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
