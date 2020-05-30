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
  bot: { flex: 5 },
});

export default styles;
/*

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    */
