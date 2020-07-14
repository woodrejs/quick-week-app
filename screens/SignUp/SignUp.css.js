import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%" },
  top: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bot: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnBox: { marginVertical: "5%" },
});

export default styles;
