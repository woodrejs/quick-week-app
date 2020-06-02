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
  return (
    <View style={styles.screen}>
      <View style={styles.layer1}>
        <View style={styles.bck}>
          <MdLight width={"100%"} style={styles.light} />
          <MdDark width={"100%"} style={styles.dark} />
        </View>
      </View>
      <View style={styles.layer2}>
        <View style={styles.top}>
          <Logo />
        </View>
        <View style={styles.bot}>
          <Txt weight={600} customStyle={styles.txt}>
            dont have account yet?
          </Txt>
          <Button
            title="sign up"
            bckColor={COLORS.first}
            txtColor={COLORS.fourth}
            height={DIMENSIONS.height * 0.05}
            width={DIMENSIONS.width * 0.75}
            onPress={() => navigation.navigate("SignUp")}
          />
          <Txt weight={600} customStyle={styles.txt}>
            or
          </Txt>
          <Button
            title="log in"
            bckColor={COLORS.secound}
            txtColor={COLORS.fourth}
            height={DIMENSIONS.height * 0.05}
            width={DIMENSIONS.width * 0.75}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
