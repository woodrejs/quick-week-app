import React from "react";
import { StyleSheet, View } from "react-native";
import Txt from "../Txt";

const InfoIcon = ({ icon, txt }) => {
  return (
    <View style={styles.box}>
      <View style={styles.iconBox}>{icon}</View>
      <Txt weight={600} customStyle={styles.txt}>
        {txt}
      </Txt>
    </View>
  );
};

export default InfoIcon;

const styles = StyleSheet.create({
  box: {
    width: "50%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconBox: { marginRight: 10, flex: 1, alignItems: "center" },
  txt: { flex: 5, flexWrap: "wrap", fontSize: 11 },
});
