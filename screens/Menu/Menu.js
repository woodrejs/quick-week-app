import React from "react";
import { View, Text } from "react-native";
import MenuScreen from "../../components/MenuScreen";
import Btn from "../../components/Btn";
import COLORS from "../../constans/COLORS";
import styles from "./Menu.css";

const Menu = () => {
  return (
    <MenuScreen title="menu">
      <View style={styles.top}>
        <Btn
          title="week plan"
          size="md"
          btnColor={COLORS.primary}
          txtColor={COLORS.third}
        />
      </View>
      <View style={styles.mid}>
        <Text style={styles.txt}>favorites</Text>
        <Btn
          title="my events"
          size="md"
          btnColor={COLORS.secondary}
          txtColor={COLORS.third}
        />
        <Btn
          title="my places"
          size="md"
          btnColor={COLORS.secondary}
          txtColor={COLORS.third}
        />
      </View>
      <View style={styles.bot}>
        <Btn
          title="search"
          size="md"
          btnColor={COLORS.fourth}
          txtColor={COLORS.fifth}
        />
        <Btn
          title="log out"
          size="md"
          btnColor={COLORS.fourth}
          txtColor={COLORS.fifth}
        />
      </View>
    </MenuScreen>
  );
};

export default Menu;
