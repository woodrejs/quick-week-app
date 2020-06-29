import React from "react";
import MapView from "react-native-map-clustering";
import { useSelector, useDispatch } from "react-redux";
import { mapActions } from "../../actions";
import displayMarkers from "../../functions/displayMarkers";
//
import { Marker } from "react-native-maps";

const CustomMap = () => {
  const dispatch = useDispatch();
  const setCoords = (region) => dispatch(mapActions.setMapCoords(region));
  const initialRegion = useSelector((state) => state.map.mapCoords);
  const markers = displayMarkers();
  const style = { width: "100%", height: "100%" };

  //
  const coords = useSelector((state) => state.map.mapCoords);

  return (
    <MapView
      style={style}
      onRegionChangeComplete={setCoords}
      initialRegion={initialRegion}
      maxZoom={14}
      moveOnMarkerPress={false}
    >
      <Marker
        coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
        pinColor={"yellow"}
      ></Marker>
      {markers}
    </MapView>
  );
};

export default CustomMap;
