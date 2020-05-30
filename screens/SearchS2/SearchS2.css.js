import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  top: {
    flex: 9,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5%",
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
  btn: {
    marginTop: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});

export default styles;
