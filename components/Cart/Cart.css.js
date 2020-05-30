import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  container: {
    height: 210,
    marginVertical: 20,
    width: "100%",
    position: "relative",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  mainBox: { height: "100%", width: "100%" },
  iconsBox: {
    height: 80,
    position: "absolute",
    justifyContent: "space-between",
    right: "3%",
    top: "10%",
  },
  mask: {
    opacity: 0.4,
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.third,
  },
  titleBox: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: -20,
    left: "5%",
    right: "5%",
    position: "absolute",
    backgroundColor: COLORS.first,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 12,
    color: COLORS.fourth,
    letterSpacing: 1,
  },
  dateBox: {
    flex: 1,
    padding: "3%",
  },
  date: {
    textTransform: "uppercase",
    fontSize: 14,
    color: COLORS.fourth,
    letterSpacing: 1,
    textAlign: "left",
  },
  timeBox: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    textTransform: "uppercase",
    fontSize: 35,
    color: COLORS.fourth,
    letterSpacing: 1,
    textAlign: "left",
  },
  start: {
    textTransform: "uppercase",
    fontSize: 14,
    color: COLORS.fourth,
    letterSpacing: 1,
    textAlign: "left",
  },
});

export default styles;
