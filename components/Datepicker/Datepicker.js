import React, { useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";
import CheckBox from "../CheckBox";
import styles from "./Datepicker.css";
import setDate from "../../functions/setDate";
import { useDispatch, useSelector } from "react-redux";

const Datepicker = ({ label }) => {
  const isTypePlaces = useSelector(({ search }) => search.type);
  const [placeholder, setPlaceholder] = useState(label);
  const [anyDate, setAnyDate] = useState(true);
  const dispatch = useDispatch();

  const handlePicker = (date) => {
    setAnyDate(false);
    setPlaceholder(date);
    setDate(date, label, dispatch);
  };

  const handleCheckbox = () => {
    setAnyDate(!anyDate);
    setPlaceholder("any");
    setDate(null, label, dispatch);
  };

  return (
    <View style={styles.box}>
      <DatePicker
        style={styles.picker}
        showIcon={false}
        mode="date"
        placeholder={placeholder}
        format="YYYY-MM-DD"
        onDateChange={(date) => handlePicker(date)}
        disabled={isTypePlaces}
      />
      <CheckBox
        title="any"
        change={handleCheckbox}
        value={anyDate}
        disabled={isTypePlaces}
      />
    </View>
  );
};

export default Datepicker;
