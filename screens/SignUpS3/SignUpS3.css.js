import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "60%",
    width: 280,
  },
  txtBox: { flex: 2, justifyContent: "space-evenly" },
  btnBox: { flex: 1, marginTop: "10%" },
  h1: { fontSize: 32 },
  h2: { fontSize: 12 },
  h3: { fontSize: 11 },
  txt: { textTransform: "capitalize" },
});

export default styles;
