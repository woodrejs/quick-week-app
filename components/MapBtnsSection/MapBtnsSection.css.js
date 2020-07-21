import { StyleSheet } from "react-native";
import DIMENSIONS from "../../constans/DIMENSIONS";

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    height: DIMENSIONS.height * 0.1,
    bottom: DIMENSIONS.height * 0.04,
  },
  topBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  botBox: { flex: 1, justifyContent: "center", alignItems: "flex-end" },
  primaryBtn: {
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  secoundaryBtn: { borderRadius: 0 },
});

export default styles;
