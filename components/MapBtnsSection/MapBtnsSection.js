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
  const goMenu = () => navigation.navigate("Menu");
  const displayPlacesMarkers = () =>
    dispatch(markersActions.setDisplayedMarkers("places"));
  const displayEventsMarkers = () =>
    dispatch(markersActions.setDisplayedMarkers("events"));
  const displayedMarkers = useSelector(
    ({ markers }) => markers.displayedMarkers
  );
  const showColor = displayedMarkers === "places" ? true : false;

  return (
    <View style={styles.box}>
      <View style={styles.topBox}>
        <Button
          width={width}
          height={height}
          bckColor={showColor ? first : fourth}
          txtColor={showColor ? fourth : third}
          title="places"
          radius={styles.firstBtn}
          onPress={displayPlacesMarkers}
        />
        <Button
          width={width}
          height={height}
          bckColor={showColor ? fourth : first}
          txtColor={showColor ? third : fourth}
          title="events"
          radius={styles.secoundBtn}
          onPress={displayEventsMarkers}
        />
      </View>
      <View style={styles.botBox}>
        <Button
          width={width}
          height={height}
          bckColor={fourth}
          txtColor={third}
          title="menu"
          radius={styles.firstBtn}
          onPress={goMenu}
        />
      </View>
    </View>
  );
};

export default MapBtnsSection;
