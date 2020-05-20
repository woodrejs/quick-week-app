import React from "react";
import { View } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import Steps from "../../components/Steps";
import styles from "./SignUpS1.css";

const SignUpS1 = () => {
  return (
    <MenuScreen title="step one">
      <View style={styles.top}>
        <View style={styles.box}>
          <Input label="login" />
          <Input label="login" />
        </View>
        <Btn
          title="next"
          size="md"
          btnColor={COLORS.primary}
          txtColor={COLORS.third}
        />
      </View>
      <View style={styles.bot}>
        <Btn
          title="back"
          size="md"
          btnColor={COLORS.fourth}
          txtColor={COLORS.fifth}
        />

        <Steps labelsNumber={2} stepsNumber={1} />
      </View>
    </MenuScreen>
  );
};

export default SignUpS1;
