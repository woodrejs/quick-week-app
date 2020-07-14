import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
  },
  top: { flex: 2, alignItems: "center", justifyContent: "center" },
  bot: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
  txt: { marginVertical: 17, textTransform: "uppercase", letterSpacing: 0.5 },
});

export default styles;
