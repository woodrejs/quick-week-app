import React from "react";
import { View } from "react-native";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../CheckBox";
import COLORS from "../../constans/COLORS";
import styles from "./SearchPhrase.css";

const SearchPhrase = ({ next }) => {
  return (
    <View style={styles.MainBox}>
      <Input label="phrase" size={{ height: 40, width: 280 }} />
      <View style={styles.checkboxsBox}>
        <Checkbox title="places" />
        <Checkbox title="events" />
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

export default SearchPhrase;
