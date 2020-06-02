import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: "center",
    marginTop: DIMENSIONS.height * 0.05,
  },
  txtBox: { flex: 1, justifyContent: "center", width: DIMENSIONS.width * 0.75 },
  listBox: { flex: 2, width: DIMENSIONS.width * 0.75 },
  btnBox: { flex: 1, justifyContent: "center" },
  txt: {
    textAlign: "left",
    width: "70%",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: DIMENSIONS.height * 0.022,
  },
});

export default styles;
