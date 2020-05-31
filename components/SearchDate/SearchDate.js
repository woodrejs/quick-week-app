import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button";
import Datepicker from "../Datepicker";
import COLORS from "../../constans/COLORS";

const SearchDate = ({ next }) => {
  return (
    <View>
      <Datepicker label="from" />
      <Datepicker label="to" />
      <View style={styles.btn}>
        <Button
          title="next"
          height={40}
          width={280}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={next}
        />
      </View>
    </View>
  );
};

export default SearchDate;

const styles = StyleSheet.create({
  btn: {
    //marginTop: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
