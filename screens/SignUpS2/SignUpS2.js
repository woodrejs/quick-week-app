import React from "react";
import { View } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import Checkbox from "../../components/CheckBox";
import COLORS from "../../constans/COLORS";
import Steps from "../../components/Steps";
import styles from "./SignUpS2.css";

const SignUpS2 = () => {
  return (
    <MenuScreen title="step two">
      <View style={styles.top}>
        <View style={styles.inputsBox}>
          <Input label="password" />
          <Input label="repeat password" />
        </View>
        <View style={styles.checkBox}>
          <Checkbox title="ACCEPT TERMS AND CONDITION" />
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
        <Steps labelsNumber={2} stepsNumber={2} />
      </View>
    </MenuScreen>
  );
};

export default SignUpS2;
