import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%" },
  top: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
  },
  mid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bot: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
