import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: { width: "90%", height: "50%", position: "absolute", zIndex: 1 },
  mask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7,
  },
});

export default styles;
