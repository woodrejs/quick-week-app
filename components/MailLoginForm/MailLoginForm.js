import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const MailLoginForm = ({ next }) => {
  return (
    <View>
      <View style={styles.inputsBox}>
        <View style={styles.inputBox}>
          <Input
            label="login"
            size={{
              height: DIMENSIONS.height * 0.05,
              width: DIMENSIONS.width * 0.75,
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Input
            label="email"
            size={{
              height: DIMENSIONS.height * 0.05,
              width: DIMENSIONS.width * 0.75,
            }}
          />
        </View>
      </View>
      <Button
        title="next"
        height={DIMENSIONS.height * 0.05}
        width={DIMENSIONS.width * 0.75}
        bckColor={COLORS.first}
        txtColor={COLORS.fourth}
        onPress={next}
      />
    </View>
  );
};

export default MailLoginForm;

const styles = StyleSheet.create({
  inputsBox: { width: "100%", alignItems: "center", marginBottom: "10%" },
  inputBox: { marginBottom: 25 },
});
