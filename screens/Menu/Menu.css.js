import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: "7%",
  },
  mid: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bot: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "12%",
  },
  txt: {
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default styles;
