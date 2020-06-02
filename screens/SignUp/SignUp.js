import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Txt from "../../components/Txt";
import styles from "./SignUp.css";
import FbIcon from "../../img/icons/facebook_icon.svg";
import GoogleIcon from "../../img/icons/google_icon.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";

const SignUp = ({ navigation }) => {
  return (
    <Basic title="sign up" size="md" navigation={navigation}>
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
        <Button
          title="facebook"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          component={<FbIcon />}
        />
        <Button
          title="google"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          component={<GoogleIcon />}
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

export default SignUp;
