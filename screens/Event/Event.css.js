import { StyleSheet } from "react-native";
import COLORS from "../../constans/COLORS";

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    width: "100%",
    alignItems: "center",
  },
  botBox: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  titleBox: { width: "90%", marginBottom: 20 },
  title: { fontSize: 25, textTransform: "uppercase", letterSpacing: 1 },
  tagsBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  imgBox: {
    width: "100%",
    height: 250,
    marginBottom: 30,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  img: { width: "100%", height: "100%", position: "relative" },
  imgIconsBox: { right: "2%", top: "4%", height: "40%" },
  mask: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.third,
    opacity: 0.3,
  },
  txtBox: { width: "90%", marginBottom: 30 },
  txt: { fontSize: 10, letterSpacing: 1 },
  btnBox: {
    width: "90%",
    height: 100,
    marginVertical: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },
  galleryBox: {
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default styles;
