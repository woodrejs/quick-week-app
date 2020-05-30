import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";
import CheckBox from "../CheckBox";
import styles from "./Datepicker.css";
import Txt from "../Txt";

const Datepicker = ({ label }) => {
  return (
    <View style={styles.container}>
      <Txt weight={500} customStyle={styles.label}>
        {label}
      </Txt>
      <View style={styles.box}>
        <DatePicker
          style={styles.picker}
          showIcon={false}
          //date={"2020-12-20"}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          onDateChange={(date) => console.log(date)}
        />
        <CheckBox title="any" />
      </View>
    </View>
  );
};

export default Datepicker;
