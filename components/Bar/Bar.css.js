import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "5%",
  },
  logoBox: { flex: 1 },
  menuBox: { flex: 2, flexDirection: "row", justifyContent: "space-around" },
  txt: { textTransform: "uppercase", letterSpacing: 2 },
});

export default styles;
