import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./Bar.css";
import Txt from "../Txt";
import Logo from "../../img/logo/lg_red.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Bar = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.goBack()}>
        <Txt weight={600} customStyle={styles.txt}>
          back
        </Txt>
      </TouchableOpacity>
      <View style={styles.box}>
        <Logo
          height={DIMENSIONS.height * 0.09}
          width={DIMENSIONS.height * 0.09}
        />
      </View>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.toggleDrawer()}
      >
        <Txt weight={600} customStyle={styles.txt}>
          {title}
        </Txt>
      </TouchableOpacity>
    </View>
  );
};

export default Bar;
/*
  <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.goBack()}
        >
          <Txt weight={600} customStyle={styles.txt}>
            back
          </Txt>
        </TouchableOpacity>
        */
