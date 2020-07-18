import React from "react";
import { View } from "react-native";
import MdLight from "../../img/backgrounds/mdLight.svg";
import MdDark from "../../img/backgrounds/mdDark.svg";
import Logo from "../../img/logo/lg_home.svg";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Txt from "../../components/Txt";
import styles from "./Welcome.css";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Welcome = ({ navigation }) => {
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };
  const secoundaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.secound,
  };
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Logo />
      </View>
      <View style={styles.bot}>
        <Txt weight={600} customStyle={styles.txt}>
          dont have account yet?
        </Txt>
        <Button
          title="sign up"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("SignUp")}
        />
        <Txt weight={600} customStyle={styles.txt}>
          or
        </Txt>
        <Button
          title="log in"
          customStyle={secoundaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default Welcome;
