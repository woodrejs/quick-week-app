import React from "react";
import { View, Text } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import styles from "./Welcome.css";

const Welcome = () => {
  return (
    <MenuScreen title="welcome">
      <View style={styles.screen}>
        <View style={styles.box}>
          <Text style={styles.h1}>CONGRATULATIONS</Text>
          <Text style={styles.h2}>YOU HAVE SIGN UP TO QUICK WEEK APP</Text>
          <Text style={styles.h3}>
            NOW YOU CAN SEARCH AND TRACK YOUR FAVORITES PLACESES AND EVENTS.
          </Text>
        </View>

        <Btn
          title="start"
          size="md"
          btnColor={COLORS.primary}
          txtColor={COLORS.third}
        />
      </View>
    </MenuScreen>
  );
};

export default Welcome;
