import React, { useMemo } from "react";
import MapView from "react-native-map-clustering";
import { useSelector } from "react-redux";
import createMarkers from "../../functions/createMarkers";
import COLORS from "../../constans/COLORS";
import { INITIAL_REGION, MAX_ZOOM, RADIUS } from "../../constans/MAP";

const CustomMap = ({ navigation }) => {
  const STORE = useSelector(({ markers }) => markers);
  const { events, places, displayedType } = STORE;

  const markers = useMemo(() => {
    const data = displayedType ? places : events;
    return createMarkers(navigation, data);
  }, [displayedType]);

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      initialRegion={INITIAL_REGION}
      maxZoom={MAX_ZOOM}
      radius={RADIUS}
      tracksViewChanges={false}
      moveOnMarkerPress={false}
      clusterColor={displayedType ? COLORS.first : COLORS.secound}
    >
      {markers}
    </MapView>
  );
};

export default CustomMap;
