import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  top: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
    paddingTop: "15%",
  },
  mid: { flex: 2, justifyContent: "center", alignItems: "center" },
  bot: {
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: { width: "70%", flexDirection: "row", marginBottom: "10%" },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
