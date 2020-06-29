import React from "react";
import { Marker } from "react-native-maps";
import uuid from "uuid-random";
import MarkersCallout from "../components/MarkersCallout";

const createMarker = (data) => {
  const { latitude, longitude, title, street, longDescription } = data;
  return (
    <Marker
      key={uuid()}
      coordinate={{ latitude, longitude }}
      tracksViewChanges={false}
      tracksInfoWindowChanges={false}
      pinColor={"green"}
    >
      <MarkersCallout
        title={title}
        street={street}
        longDescription={longDescription}
      />
    </Marker>
  );
};
export default createMarker;
