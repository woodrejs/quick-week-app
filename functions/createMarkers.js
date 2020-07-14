import { useSelector } from "react-redux";
import { isDateInRange, isCoordsInRange } from "./isInRange";
import React from "react";
import { Marker } from "react-native-maps";
import uuid from "uuid-random";
import MarkersCallout from "../components/MarkersCallout";
import COLORS from "../constans/COLORS";

export const createMarker = (data, navigation, type) => {
  const { latitude, longitude, title, street, longDescription, id } = data;
  return (
    <Marker
      key={uuid()}
      coordinate={{ latitude, longitude }}
      tracksViewChanges={false}
      tracksInfoWindowChanges={false}
      pinColor={type ? COLORS.first : COLORS.secound}
    >
      <MarkersCallout
        id={id}
        title={title}
        type={type}
        street={street}
        longDescription={longDescription}
        navigation={navigation}
      />
    </Marker>
  );
};

export const createEventsMarkers = (navigation) => {
  const map = useSelector(({ map }) => map);
  const events = useSelector(({ markers }) => markers.events);
  const { date, mapCoords } = map;

  return events.reduce((array, event) => {
    const { longitude, latitude } = event;
    const dateInRange = isDateInRange(date, event);
    if (dateInRange) {
      const coordsInRange = isCoordsInRange(mapCoords, longitude, latitude);
      if (coordsInRange) {
        const marker = createMarker(event, navigation, false); // type = false for 'events'
        array.push(marker);
      }
    }

    return array;
  }, []);
};

export const createPlacesMarkers = (navigation) => {
  const coords = useSelector(({ map }) => map.mapCoords);
  const places = useSelector(({ markers }) => markers.places);

  return places.reduce((array, place) => {
    const { longitude, latitude } = place;
    const coordsInRange = isCoordsInRange(coords, longitude, latitude);

    if (coordsInRange) {
      const marker = createMarker(place, navigation, true); // type = true for 'places'
      array.push(marker);
    }

    return array;
  }, []);
};
