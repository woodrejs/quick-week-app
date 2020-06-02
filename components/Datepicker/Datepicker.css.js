import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    width: DIMENSIONS.width * 0.75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  picker: {
    flex: 4,
    marginRight: 10,
    backgroundColor: "white",
    borderColor: COLORS.sixth,
  },
});

export default styles;
