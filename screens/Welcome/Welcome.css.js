import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
  },
  layer1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  layer2: {
    width: "100%",
    height: "100%",
    zIndex: 2,
    position: "absolute",
  },
  bck: { position: "relative", width: "100%", height: "100%" },
  light: { zIndex: 1, position: "absolute", bottom: 0 },
  dark: { zIndex: 2, position: "absolute", bottom: 0 },
  top: { flex: 2, alignItems: "center", justifyContent: "center" },
  bot: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
  txt: { marginVertical: 17, textTransform: "uppercase", letterSpacing: 0.5 },
});

export default styles;
