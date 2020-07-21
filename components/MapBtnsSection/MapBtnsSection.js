import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { markersActions } from "../../actions";
import Button from "../Button";
import DIMENSIONS from "../../constans/DIMENSIONS";
import COLORS from "../../constans/COLORS";
import styles from "./MapBtnsSection.css";

const MapBtnsSection = () => {
  const dispatch = useDispatch();

  const markersType = useSelector(({ markers }) => markers.displayedType);
  const displayPlacesMarkers = () =>
    dispatch(markersActions.setTypeMarkers(true));
  const displayEventsMarkers = () =>
    dispatch(markersActions.setTypeMarkers(false));

  const { first, third, fourth } = COLORS;

  const primaryBtn = {
    width: DIMENSIONS.width * 0.2,
    height: DIMENSIONS.height * 0.035,
    backgroundColor: markersType ? first : fourth,
  };
  const secoundaryBtn = {
    width: DIMENSIONS.width * 0.2,
    height: DIMENSIONS.height * 0.035,
    backgroundColor: markersType ? fourth : first,
  };

  return (
    <View style={styles.box}>
      <View style={styles.topBox}>
        <Button
          title="places"
          customStyle={primaryBtn}
          txtColor={markersType ? fourth : third}
          radius={styles.primaryBtn}
          onPress={displayPlacesMarkers}
        />
        <Button
          title="events"
          customStyle={secoundaryBtn}
          txtColor={markersType ? third : fourth}
          radius={styles.secoundaryBtn}
          onPress={displayEventsMarkers}
        />
      </View>
    </View>
  );
};

export default MapBtnsSection;
