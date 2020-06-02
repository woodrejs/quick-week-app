import React from "react";
import { View } from "react-native";
import Button from "../Button";
import Datepicker from "../Datepicker";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import Txt from "../../components/Txt";
import styles from "./SearchDate.css";

const SearchDate = ({ next }) => {
  return (
    <View style={styles.container}>
      <View style={styles.txtBox}>
        <Txt weight={500} customStyle={styles.txt}>
          Date
        </Txt>
      </View>
      <View style={styles.dateBox}>
        <Datepicker label="from" />
        <Datepicker label="to" />
      </View>
      <View customStyle={styles.btnBox}>
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

export default SearchDate;
