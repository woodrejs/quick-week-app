import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  mid: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 2,
  },
  bot: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  txt: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "700",
    marginTop: "20%",
    marginBottom: "5%",
  },
});

export default styles;
