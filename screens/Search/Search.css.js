import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  top: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
  },
  bot: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    width: "70%",
    flexDirection: "row",
    marginBottom: "10%",
  },
});

export default styles;
