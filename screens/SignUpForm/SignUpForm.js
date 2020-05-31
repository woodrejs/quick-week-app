import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Steps from "../../components/Steps";
import PasswordForm from "../../components/PasswordForm";
import MailLoginForm from "../../components/MailLoginForm";

const SignUpForm = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step === 2) navigation.navigate("SignUpEnd");
    else setStep(step + 1);
  };
  const prevStep = () => {
    if (step === 1) navigation.navigate("SignUp", { screen: "SignUp" });
    else setStep(step - 1);
  };
  return (
    <Basic title="step one" size="sm" navigation={navigation}>
      <View style={styles.top}>
        {step === 1 && <PasswordForm next={nextStep} />}
        {step === 2 && <MailLoginForm next={nextStep} />}
      </View>
      <View style={styles.mid}>
        <Steps step={step} steps={2} />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={30}
          width={280}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={prevStep}
        />
      </View>
    </Basic>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 7,
  },
  mid: { flex: 1, justifyContent: "center", alignItems: "center" },
  bot: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 2,
  },
  box: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
    justifyContent: "center",
  },
  checkBox: {
    height: 40,
    width: 280,
    justifyContent: "flex-start",
  },
  steps: { height: 40, width: 150, backgroundColor: "blue", borderRadius: 50 },
});
