import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    height: DIMENSIONS.height * 0.1,
    right: 0,
    marginTop: DIMENSIONS.width * 0.05,
  },
  topBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  botBox: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
  firstBtn: {
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  secoundBtn: { borderRadius: 0 },
});

export default styles;
