import { useDispatch } from "react-redux";
import { mapActions, appActions } from "../actions";

const setCoords = (isCoordsLoaded) => {
  const dispatch = useDispatch();
  if (!isCoordsLoaded) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const initialCoords = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.05,
        };
        dispatch(mapActions.setMapCoords(initialCoords));
        dispatch(appActions.setCoordsLoaded());
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
};

export default setCoords;
