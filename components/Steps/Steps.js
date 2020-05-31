import React, { useEffect, useState } from "react";
import { View } from "react-native";
import uuid from "uuid-random";
import styles from "./Steps.css";

const Steps = ({ step, steps }) => {
  const [stepsArray, setStepsArray] = useState([]);
  const emptyBall = { ...styles.ball, ...styles.empty };
  const fillBall = { ...styles.ball, ...styles.fill };

  useEffect(() => {
    const tmpArray = [];
    for (let i = 0; i < steps; i++) {
      const key = uuid();
      step > i
        ? tmpArray.push(<View key={key} style={fillBall}></View>)
        : tmpArray.push(<View key={key} style={emptyBall}></View>);
    }
    setStepsArray(tmpArray);
  }, [steps, step]);

  return <View style={styles.box}>{stepsArray}</View>;
};

export default Steps;
