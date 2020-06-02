import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  txtBox: { width: DIMENSIONS.width * 0.75, height: DIMENSIONS.height * 0.06 },
  dateBox: {
    height: DIMENSIONS.height * 0.15,
    marginBottom: 30,
    justifyContent: "space-evenly",
  },
  btnBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: { fontSize: DIMENSIONS.height * 0.021, textTransform: "uppercase" },
});

export default styles;
