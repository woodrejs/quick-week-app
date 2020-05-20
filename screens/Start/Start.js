import React from "react";
import { Text, View, Image } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import styles from "./Start.css";

const Start = () => {
  return (
    <MenuScreen title="quick week">
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
        <View style={styles.btnsContainer}>
          <Text style={styles.txt}>DONT HAVE ACCOUNT YET?</Text>
          <Btn
            title="sign up"
            btnColor={COLORS.primary}
            txtColor={COLORS.third}
            size="md"
          />
          <Text style={styles.txt}>or</Text>
          <Btn
            title="log in"
            btnColor={COLORS.secondary}
            txtColor={COLORS.third}
            size="md"
          />
        </View>
      </View>
    </MenuScreen>
  );
};

export default Start;
