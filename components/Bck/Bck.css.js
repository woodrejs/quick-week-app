import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: { width: "100%", height: "100%", position: "relative" },
  light: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
  dark: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
