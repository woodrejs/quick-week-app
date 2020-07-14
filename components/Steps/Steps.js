import React from "react";
import { View } from "react-native";
import styles from "./Steps.css";

const Steps = ({ step, steps }) => {
  const emptyBallStyle = { ...styles.ball, ...styles.empty };
  const fillBallStyle = { ...styles.ball, ...styles.fill };
  const emptyBall = <View style={emptyBallStyle}></View>;
  const fillBall = <View style={fillBallStyle}></View>;

  return (
    <View style={styles.box}>
      {fillBall}
      {step > 1 ? fillBall : emptyBall}
      {steps === 3 && (step === 3 ? fillBall : emptyBall)}
    </View>
  );
};

export default Steps;
