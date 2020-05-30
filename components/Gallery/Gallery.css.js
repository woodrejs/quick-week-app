import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imgsBox: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: "-2%" },
  imgBox: {
    width: "46%",
    height: 120,
    margin: "2%",
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  txt: { fontSize: 18, textTransform: "uppercase", marginBottom: 10 },
});

export default styles;
