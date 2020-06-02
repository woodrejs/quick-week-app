import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import CheckBox from "../CheckBox";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";

const PasswordForm = ({ next }) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          <Input
            label="password"
            size={{
              height: DIMENSIONS.height * 0.05,
              width: DIMENSIONS.width * 0.75,
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Input
            label="repeat password"
            size={{
              height: DIMENSIONS.height * 0.05,
              width: DIMENSIONS.width * 0.75,
            }}
          />
        </View>
        <View style={styles.checkBox}>
          <CheckBox title="ACCEPT TERMS AND CONDITION" />
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

export default PasswordForm;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    alignItems: "center",
    marginBottom: "10%",
    justifyContent: "center",
  },
  checkBox: {
    height: DIMENSIONS.height * 0.03,
    width: DIMENSIONS.width * 0.75,
    justifyContent: "flex-start",
  },
  inputBox: { marginBottom: 25 },
});
