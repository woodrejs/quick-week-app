import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
  },
  layer1: {
    zIndex: 2,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  layer2: { zIndex: 3, position: "absolute", width: "100%", height: "100%" },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bot: { flex: 6 },
});

export default styles;
