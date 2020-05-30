import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./Bar.css";
import Txt from "../Txt";
import Logo from "../../img/logo/lg_red.svg";

const Bar = ({ title, navigation }) => {
  return (
    <View style={styles.box}>
      <View style={styles.logoBox}>
        <Logo height={60} width={60} />
      </View>
      <View style={styles.menuBox}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.goBack()}
        >
          <Txt weight={600} customStyle={styles.txt}>
            back
          </Txt>
        </TouchableOpacity>
        <TouchableOpacity style={styles.left}>
          <Txt weight={600} customStyle={styles.txt}>
            {title}
          </Txt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bar;
