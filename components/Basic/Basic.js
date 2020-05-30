import React from "react";
import { View } from "react-native";
import Logo from "../../img/logo/lg_red.svg";
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
