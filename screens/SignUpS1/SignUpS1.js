import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import styles from "./SignUpS1.css";
import CheckBox from "../../components/CheckBox";

const SignUpS1 = ({ navigation }) => {
  return (
    <Basic title="step one" size="sm" navigation={navigation}>
      <View style={styles.top}>
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
          onPress={() => navigation.navigate("SignUpS2")}
        />
      </View>
      <View style={styles.mid}>
        <View style={styles.steps}></View>
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

export default SignUpS1;
