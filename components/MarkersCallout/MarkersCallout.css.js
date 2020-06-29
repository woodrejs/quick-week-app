import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    width: DIMENSIONS.width * 0.7,
    flexWrap: "wrap",
    margin: 5,
  },
  top: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  mid: { flexDirection: "row", alignItems: "center" },
  descriptionTxt: { fontSize: 11, marginTop: 10, flexWrap: "wrap" },
  adress: { fontSize: 13, marginLeft: 20 },
  title: { fontSize: 15, flex: 1, flexWrap: "wrap" },
});

export default styles;
