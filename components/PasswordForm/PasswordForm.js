import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import CheckBox from "../CheckBox";
import Button from "../Button";
import COLORS from "../../constans/COLORS";

const PasswordForm = ({ next }) => {
  return (
    <View>
      <View style={styles.box}>
        <Input label="password" size={{ height: 35, width: 280 }} />
        <Input label="repeat password" size={{ height: 35, width: 280 }} />
        <View style={styles.checkBox}>
          <CheckBox title="ACCEPT TERMS AND CONDITION" />
        </View>
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

export default PasswordForm;

const styles = StyleSheet.create({
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
});
