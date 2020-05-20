import React from "react";
import { View } from "react-native";
import COLORS from "../../constans/COLORS";
import MenuScreen from "../../components/MenuScreen";
import Btn from "../../components/Btn";
import Input from "../../components/Input";
import Checkbox from "../../components/CheckBox";
import Steps from "../../components/Steps";
import styles from "./Search.css";

const Search = () => {
  return (
    <MenuScreen title="search">
      <View style={styles.top}>
        <View style={styles.container}>
          <Input label="phrase" />
          <View style={styles.box}>
            <Checkbox title="places" />
            <Checkbox title="events" />
          </View>
          <Btn
            btnColor={COLORS.primary}
            txtColor={COLORS.third}
            title="next"
            size="md"
          />
        </View>
      </View>
      <View style={styles.bot}>
        <Btn
          title="back"
          size="md"
          btnColor={COLORS.fourth}
          txtColor={COLORS.fifth}
        />
        <Steps labelsNumber={3} stepsNumber={1} />
      </View>
    </MenuScreen>
  );
};

export default Search;
