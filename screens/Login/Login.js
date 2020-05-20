import React from "react";
import { View } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import styles from "./Login.css";

const Login = () => {
  return (
    <MenuScreen title="log in">
      <View style={styles.top}>
        <View style={styles.box}>
          <Input label="login" />
          <Input label="password" />
        </View>
        <Btn
          title="log in"
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
      </View>
    </MenuScreen>
  );
};

export default Login;
