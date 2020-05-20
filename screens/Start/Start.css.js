import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 195,
    width: 195,
  },
  btnsContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 11,
    textTransform: "uppercase",
    fontWeight: "700",
    marginVertical: "5%",
    letterSpacing: 1,
  },
});

export default styles;
