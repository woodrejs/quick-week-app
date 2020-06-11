import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../../actions";
import Button from "../Button";
import DIMENSIONS from "../../constans/DIMENSIONS";
import COLORS from "../../constans/COLORS";
import styles from "./MapBtnsSection.css";

const MapBtnsSection = ({ navigation }) => {
  const dispatch = useDispatch();
  const isPlacesSet = useSelector((state) => state.map.places);
  const isEventsSet = useSelector((state) => state.map.events);

  return (
    <View style={styles.box}>
      <View style={styles.topBox}>
        <Button
          width={DIMENSIONS.width * 0.2}
          height={DIMENSIONS.height * 0.035}
          bckColor={isPlacesSet ? COLORS.first : COLORS.fourth}
          txtColor={isPlacesSet ? COLORS.fourth : COLORS.third}
          title="places"
          radius={styles.firstBtn}
          onPress={() => dispatch(mapActions.setPlaces())}
        />
        <Button
          width={DIMENSIONS.width * 0.2}
          height={DIMENSIONS.height * 0.035}
          bckColor={isEventsSet ? COLORS.first : COLORS.fourth}
          txtColor={isEventsSet ? COLORS.fourth : COLORS.third}
          title="events"
          radius={styles.secoundBtn}
          onPress={() => dispatch(mapActions.setEvents())}
        />
      </View>
      <View style={styles.botBox}>
        <Button
          width={DIMENSIONS.width * 0.2}
          height={DIMENSIONS.height * 0.035}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          title="menu"
          radius={styles.firstBtn}
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </View>
  );
};

export default MapBtnsSection;
