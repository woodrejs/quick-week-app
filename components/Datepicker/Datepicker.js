import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";
import CheckBox from "../CheckBox";
import styles from "./Datepicker.css";

const Datepicker = ({ label }) => {
  return (
    <View style={styles.box}>
      <DatePicker
        style={styles.picker}
        showIcon={false}
        //date={"2020-12-20"}
        mode="date"
        placeholder={label}
        format="YYYY-MM-DD"
        onDateChange={(date) => console.log(date)}
      />
      <CheckBox title="any" />
    </View>
  );
};

export default Datepicker;
