import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import Button from "../Button";
import COLORS from "../../constans/COLORS";

const MailLoginForm = ({ next }) => {
  return (
    <View>
      <View style={styles.inputsBox}>
        <Input label="login" size={{ height: 35, width: 280 }} />
        <Input label="email" size={{ height: 35, width: 280 }} />
      </View>
      <Button
        title="next"
        height={40}
        width={280}
        bckColor={COLORS.first}
        txtColor={COLORS.fourth}
        onPress={next}
      />
    </View>
  );
};

export default MailLoginForm;

const styles = StyleSheet.create({
  inputsBox: { width: "100%", alignItems: "center", marginBottom: 20 },
});
