import React, { useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { mapActions } from "../../actions";
import Txt from "../Txt";
import styles from "./MapDays.css";

const MapDays = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => new Date(state.map.date));
  const dateArray = date.toString().split(" ");

  const handleNextDay = useCallback(() => {
    let nextDay = new Date(date.setDate(date.getDate() + 1));
    nextDay = nextDay.toISOString().slice(0, 10);
    dispatch(mapActions.incrementDate(nextDay));
  }, []);

  const handlePrevDay = useCallback(() => {
    let prevDay = new Date(date.setDate(date.getDate() - 1));
    prevDay = prevDay.toISOString().slice(0, 10);
    dispatch(mapActions.decrementDate(prevDay));
  }, []);

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={handlePrevDay}>
        <View style={styles.smBall}>
          <Txt weight={500}>-</Txt>
        </View>
      </TouchableOpacity>
      <View style={styles.lgBall}>
        <Txt weight={500}>{dateArray[2]}</Txt>
        <Txt weight={500}>{dateArray[1]}</Txt>
        <Txt weight={500}>{dateArray[0]}</Txt>
      </View>
      <TouchableOpacity onPress={handleNextDay}>
        <View style={styles.smBall}>
          <Txt weight={500}>+</Txt>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MapDays;
