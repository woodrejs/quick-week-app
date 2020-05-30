import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Txt from "../../components/Txt";
import styles from "./SignUp.css";
import FbIcon from "../../img/icons/facebook_icon.svg";
import GoogleIcon from "../../img/icons/google_icon.svg";

const SignUp = ({ navigation }) => {
  return (
    <Basic title="sign up" size="md" navigation={navigation}>
      <View style={styles.top}>
        <Button
          title="sign up"
          height={45}
          width={280}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={() => navigation.push("SignUpS1")}
        />
      </View>
      <View style={styles.mid}>
        <Txt weight={600} customStyle={styles.txt}>
          sign up with:
        </Txt>
        <Button
          title="facebook"
          height={40}
          width={280}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          component={<FbIcon />}
        />
        <Button
          title="google"
          height={40}
          width={280}
          bckColor={COLORS.secound}
          txtColor={COLORS.fourth}
          component={<GoogleIcon />}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={30}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Basic>
  );
};

export default SignUp;
