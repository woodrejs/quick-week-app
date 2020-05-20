import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    marginTop: "25%",
    width: "100%",
  },
  box: {
    width: "70%",
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: "5%",
  },
  h1: { fontSize: 25, fontWeight: "700", letterSpacing: 1, lineHeight: 29 },
  h2: { fontSize: 14, fontWeight: "600", letterSpacing: 0.7, lineHeight: 18 },
  h3: { fontSize: 11, letterSpacing: 0.7, lineHeight: 15 },
});

export default styles;
