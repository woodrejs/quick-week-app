import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import Checkbox from "../CheckBox";
import COLORS from "../../constans/COLORS";
import styles from "./SearchPhrase.css";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { searchActions } from "../../actions";

const SearchPhrase = ({ next }) => {
  const dispatch = useDispatch();
  const typeValue = useSelector(({ search }) => search.type);
  const phraseStore = useSelector(({ search }) => search.phrase);
  const handleInput = (text) => {
    dispatch(searchActions.setSearchPhrase(text));
  };
  const handleCheckbox = () => {
    dispatch(searchActions.setSearchType(!typeValue));
  };
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };
  return (
    <View style={styles.mainBox}>
      <View style={styles.inputBox}>
        <Input
          change={handleInput}
          label="phrase"
          size={styles.inputSize}
          value={phraseStore}
        />
      </View>
      <View style={styles.checkboxsBox}>
        <Checkbox title="places" change={handleCheckbox} value={typeValue} />
        <Checkbox title="events" change={handleCheckbox} value={!typeValue} />
      </View>
      <View style={styles.btnBox}>
        <Button
          title="next"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={next}
        />
      </View>
    </View>
  );
};

export default SearchPhrase;
