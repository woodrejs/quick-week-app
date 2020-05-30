import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import styles from "./Login.css";

const Login = ({ navigation }) => {
  return (
    <Basic title="log in" size="lg" navigation={navigation}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Input label="login" size={{ height: 45, width: 280 }} />
          <Input label="password" size={{ height: 45, width: 280 }} />
        </View>
        <Button
          title="log in"
          height={45}
          width={280}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={40}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Basic>
  );
};

export default Login;
