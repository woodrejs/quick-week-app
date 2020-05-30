import React from "react";
import { View } from "react-native";
import Txt from "../Txt";
import styles from "./Tag.css";

const Tag = ({ title }) => {
  return (
    <View style={styles.box}>
      <Txt weight={600} customStyle={styles.txt}>
        {title}
      </Txt>
    </View>
  );
};

export default Tag;
