import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { markersActions } from "../../actions";
import Button from "../Button";
import DIMENSIONS from "../../constans/DIMENSIONS";
import COLORS from "../../constans/COLORS";
import styles from "./MapBtnsSection.css";

const MapBtnsSection = ({ navigation }) => {
  const { first, third, fourth } = COLORS;
  const width = DIMENSIONS.width * 0.2;
  const height = DIMENSIONS.height * 0.035;
  const dispatch = useDispatch();

  const markersType = useSelector(({ markers }) => markers.displayedType);
  const displayPlacesMarkers = () =>
    dispatch(markersActions.setTypeMarkers(true));
  const displayEventsMarkers = () =>
    dispatch(markersActions.setTypeMarkers(false));

  return (
    <View style={styles.box}>
      <View style={styles.topBox}>
        <Button
          width={width}
          height={height}
          bckColor={markersType ? first : fourth}
          txtColor={markersType ? fourth : third}
          title="places"
          radius={styles.firstBtn}
          onPress={displayPlacesMarkers}
        />
        <Button
          width={width}
          height={height}
          bckColor={markersType ? fourth : first}
          txtColor={markersType ? third : fourth}
          title="events"
          radius={styles.secoundBtn}
          onPress={displayEventsMarkers}
        />
      </View>
    </View>
  );
};

export default MapBtnsSection;
