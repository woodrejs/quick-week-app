import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Txt from "../../components/Txt";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import styles from "./SignUpEnd.css";
import DIMENSIONS from "../../constans/DIMENSIONS";

const txt_1 = "congratulation";
const txt_2 = "you have sign up to quick week app";
const txt_3 = "now you can search and track your favorites places and events";

const SignUpEnd = ({ navigation }) => {
  return (
    <Basic title="welcome" size="lg" navigation={navigation}>
      <View style={styles.screen} navigation={navigation}>
        <View style={styles.container}>
          <View style={styles.txtBox}>
            <Txt weight={600} customStyle={{ ...styles.h1, ...styles.txt }}>
              {txt_1}
            </Txt>
            <Txt weight={600} customStyle={{ ...styles.h2, ...styles.txt }}>
              {txt_2}
            </Txt>
            <Txt weight={500} customStyle={{ ...styles.h3, ...styles.txt }}>
              {txt_3}
            </Txt>
          </View>
          <View style={styles.btnBox}>
            <Button
              title="start"
              height={DIMENSIONS.height * 0.05}
              width={DIMENSIONS.width * 0.75}
              bckColor={COLORS.first}
              txtColor={COLORS.fourth}
              onPress={() => navigation.navigate("Menu", { screen: "Menu" })}
            />
          </View>
        </View>
      </View>
    </Basic>
  );
};

export default SignUpEnd;
