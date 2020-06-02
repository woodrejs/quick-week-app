import React from "react";
import { View } from "react-native";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../CheckBox";
import COLORS from "../../constans/COLORS";
import styles from "./SearchPhrase.css";
import DIMENSIONS from "../../constans/DIMENSIONS";

const SearchPhrase = ({ next }) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.inputBox}>
        <Input
          label="phrase"
          size={{
            height: DIMENSIONS.height * 0.055,
            width: DIMENSIONS.width * 0.75,
          }}
        />
      </View>
      <View style={styles.checkboxsBox}>
        <Checkbox title="places" />
        <Checkbox title="events" />
      </View>
      <View style={styles.btnBox}>
        <Button
          title="next"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={next}
        />
      </View>
    </View>
  );
};

export default SearchPhrase;
