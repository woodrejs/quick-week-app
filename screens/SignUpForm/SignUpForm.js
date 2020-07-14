import React from "react";
import { View, StyleSheet } from "react-native";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import MailLoginForm from "../../components/MailLoginForm";
import DIMENSIONS from "../../constans/DIMENSIONS";

const SignUpForm = ({ navigation }) => {
  return (
    <Basic title="step one" size="sm" navigation={navigation}>
      <View style={styles.top}>
        <MailLoginForm navigation={navigation} />
      </View>

      <View style={styles.bot}>
        <Button
          title="back"
          height={DIMENSIONS.height * 0.04}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
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
