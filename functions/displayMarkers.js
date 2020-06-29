import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import createMarker from "../functions/createMarker";
import isDateInRange from "../functions/isDateInRange";

const displayMarkers = () => {
  const coords = useSelector((state) => state.map.mapCoords);
  const places = useSelector((state) => state.markers.places);
  const events = useSelector((state) => state.markers.events);
  const markersType = useSelector(({ markers }) => markers.displayedMarkers); //change displayedMarkers to markers type??
  const date = useSelector((state) => state.map.date);
  const RANGE = 0.3;

  const COORDS = useMemo(
    () => ({
      LONG_MAX: coords.longitude + coords.longitudeDelta * RANGE,
      LONG_MIN: coords.longitude - coords.longitudeDelta * RANGE,
      LAT_MAX: coords.latitude + coords.latitudeDelta * RANGE,
      LAT_MIN: coords.latitude - coords.latitudeDelta * RANGE,
    }),
    [coords]
  );

  const markers = markersType === "places" ? places : events;
  const { LONG_MIN, LONG_MAX, LAT_MIN, LAT_MAX } = COORDS;

  return markers.reduce((markersArray, marker) => {
    const { longitude, latitude } = marker;
    const customMarker = createMarker(marker);
    const longInRange = longitude > LONG_MIN && longitude < LONG_MAX;
    const latInRange = latitude > LAT_MIN && latitude < LAT_MAX;
    const dateInRange = isDateInRange(date, marker);

    if (longInRange && latInRange && dateInRange)
      markersArray.push(customMarker);

    return markersArray;
  }, []);
};

export default displayMarkers;
