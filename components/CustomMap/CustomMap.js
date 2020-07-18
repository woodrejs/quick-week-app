import React from "react";
import MapView from "react-native-map-clustering";
import { useSelector, useDispatch } from "react-redux";
import { mapActions } from "../../actions";
import {
  createEventsMarkers,
  createPlacesMarkers,
} from "../../functions/createMarkers";
import COLORS from "../../constans/COLORS";
import { Marker } from "react-native-maps";

const CustomMap = ({ navigation }) => {
  const dispatch = useDispatch();
  const setCoords = (region) => dispatch(mapActions.setCoords(region));

  const coords = useSelector(({ map }) => map.coords);
  const type = useSelector(({ markers }) => markers.displayedType);

  const markers = type
    ? createPlacesMarkers(navigation)
    : createEventsMarkers(navigation);

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      onRegionChangeComplete={setCoords}
      initialRegion={coords}
      maxZoom={14}
      moveOnMarkerPress={false}
      clusterColor={type ? COLORS.first : COLORS.secound}
    >
      <Marker
        coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
        pinColor={"green"}
      ></Marker>
      {markers}
    </MapView>
  );
};

export default CustomMap;
