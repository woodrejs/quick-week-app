import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "60%",
    width: DIMENSIONS.width * 0.75,
  },
  txtBox: { flex: 2, justifyContent: "space-evenly" },
  btnBox: { flex: 1, marginTop: "10%" },
  h1: { fontSize: DIMENSIONS.height * 0.045 },
  h2: { fontSize: DIMENSIONS.height * 0.018 },
  h3: { fontSize: DIMENSIONS.height * 0.017 },
  txt: { textTransform: "capitalize" },
});

export default styles;
