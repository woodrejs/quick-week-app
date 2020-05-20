import React from "react";
import { View, Text } from "react-native";
import styles from "./TwoSteps.css";

const TwoSteps = ({ step }) => {
  return (
    <View style={styles.box}>
      <View style={styles.top}>
        <Text style={styles.step}>step 1</Text>
        <Text style={styles.step}>step 2</Text>
      </View>
      <View
        style={{
          ...styles.bot,
          ...{ alignItems: `${step === 1 ? "flex-start" : "flex-end"}` },
        }}
      >
        <View style={styles.item}></View>
      </View>
    </View>
  );
};

export default TwoSteps;
