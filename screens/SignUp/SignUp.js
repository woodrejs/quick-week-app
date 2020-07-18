import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Txt from "../../components/Txt";
import styles from "./SignUp.css";
import FbIcon from "../../img/icons/facebook_icon.svg";
import GoogleIcon from "../../img/icons/google_icon.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";

const SignUp = ({ navigation }) => {
  const primaryBtn = {
    height: DIMENSIONS.height * 0.06,
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
        <Button
          title="sign up"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={() => navigation.push("SignUpForm")}
        />
      </View>
      <View style={styles.mid}>
        <Txt weight={600} customStyle={styles.txt}>
          sign up with:
        </Txt>
      </View>
      <View style={styles.bot}>
        <View style={styles.btnBox}>
          <Button
            title="facebook"
            customStyle={secoundaryBtn}
            txtColor={COLORS.fourth}
            icon={<FbIcon />}
          />
        </View>
        <View style={styles.btnBox}>
          <Button
            title="google"
            customStyle={secoundaryBtn}
            txtColor={COLORS.fourth}
            icon={<GoogleIcon />}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
