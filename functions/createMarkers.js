import { Marker } from "react-native-maps";
import MarkersCallout from "../components/MarkersCallout";
import COLORS from "../constans/COLORS";
import React from "react";
import uuid from "uuid-random";

export const createMarkers = (navigation, data) => {
  return data.map((item) => {
    const { latitude, longitude, type } = item;
    return (
      <Marker
        key={uuid()}
        coordinate={{ latitude, longitude }}
        tracksViewChanges={false}
        tracksInfoWindowChanges={false}
        pinColor={type ? COLORS.first : COLORS.secound}
      >
        <MarkersCallout data={item} navigation={navigation} />
      </Marker>
    );
  });
};

export default createMarkers;
