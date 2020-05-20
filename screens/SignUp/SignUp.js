import React from "react";
import { View, Text } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import styles from "./SignUp.css";

const SignUp = () => {
  return (
    <MenuScreen title="sign up">
      <View style={styles.top}>
        <Btn
          title="sing up"
          size="md"
          btnColor={COLORS.primary}
          txtColor={COLORS.fourth}
        />
      </View>
      <View style={styles.mid}>
        <Text style={styles.txt}>sign up with:</Text>
        <Btn
          title="facebook"
          size="md"
          btnColor={COLORS.sixth}
          txtColor={COLORS.fifth}
        />
        <Btn
          title="google"
          size="md"
          btnColor={COLORS.sixth}
          txtColor={COLORS.fifth}
        />
      </View>
      <View style={styles.bot}>
        <Btn
          title="back"
          size="md"
          btnColor={COLORS.sixth}
          txtColor={COLORS.fifth}
        />
      </View>
    </MenuScreen>
  );
};

export default SignUp;
