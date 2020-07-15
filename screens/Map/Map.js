import React from "react";
import { View, StyleSheet } from "react-native";
import MapBtnsSection from "../../components/MapBtnsSection";

import MapDays from "../../components/MapDays";
import CustomMap from "../../components/CustomMap";

//uninstall!!!!
//import Geolocation from "@react-native-community/geolocation";
//import * as Localization from 'expo-localization';

const Map = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <CustomMap navigation={navigation} />

      <MapBtnsSection navigation={navigation} />
      <MapDays />
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%", position: "relative" },
});
