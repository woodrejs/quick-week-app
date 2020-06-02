import React from "react";
import { View } from "react-native";
import Bck from "../Bck";
import Bar from "../Bar";
import styles from "./Bacis.css";

const Basic = ({ children, size, noBck, navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.layer1}>{!noBck && <Bck size={size} />}</View>
      <View style={styles.layer2}>
        <View style={styles.top}>
          <Bar title="menu" navigation={navigation} />
        </View>
        <View style={styles.bot}>{children}</View>
      </View>
    </View>
  );
};

export default Basic;
