import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import styles from "./Login.css";

const Login = ({ navigation }) => {
  return (
    <Basic title="log in" size="lg" navigation={navigation}>
      <View style={styles.top}>
        <View style={styles.box}>
          <View style={styles.inputBox}>
            <Input
              label="login"
              size={{
                height: DIMENSIONS.height * 0.05,
                width: DIMENSIONS.width * 0.75,
              }}
            />
          </View>
          <View style={styles.btnBox}>
            <Input
              label="password"
              size={{
                height: DIMENSIONS.height * 0.05,
                width: DIMENSIONS.width * 0.75,
              }}
            />
          </View>
        </View>
        <Button
          title="log in"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Menu", { screen: "Menu" })}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Basic>
  );
};

export default Login;
