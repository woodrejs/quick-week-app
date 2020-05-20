import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import uuid from "uuid-random";
import styles from "./Steps.css";

const Steps = ({ labelsNumber, stepsNumber }) => {
  const [labels, setLabels] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    let labelsArray = [];
    for (let i = 1; i <= labelsNumber; i++) {
      const key = uuid();
      const txt = `step ${i}`;

      labelsArray.push(
        <Text style={styles.labels} key={key}>
          {txt}
        </Text>
      );
    }
    setLabels(labelsArray);
  }, [labelsNumber]);
  useEffect(() => {
    let stepsArray = [];
    for (let i = 1; i <= stepsNumber; i++) {
      const key = uuid();
      const width = `${100 / labelsNumber}%`;

      stepsArray.push(
        <View style={{ ...styles.steps, ...{ width } }} key={key}></View>
      );
    }
    setSteps(stepsArray);
  }, [stepsNumber, labelsNumber]);

  return (
    <View style={styles.box}>
      <View style={styles.labelsBox}>{labels}</View>
      <View style={styles.stepsBox}>{steps}</View>
    </View>
  );
};

export default Steps;
