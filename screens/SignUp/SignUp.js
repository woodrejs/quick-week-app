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
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Button
          title="sign up"
          height={DIMENSIONS.height * 0.06}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
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
            height={DIMENSIONS.height * 0.05}
            width={DIMENSIONS.width * 0.75}
            bckColor={COLORS.secound}
            txtColor={COLORS.fourth}
            component={<FbIcon />}
          />
        </View>
        <View style={styles.btnBox}>
          <Button
            title="google"
            height={DIMENSIONS.height * 0.05}
            width={DIMENSIONS.width * 0.75}
            bckColor={COLORS.secound}
            txtColor={COLORS.fourth}
            component={<GoogleIcon />}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
