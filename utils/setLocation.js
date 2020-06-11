import { useDispatch } from "react-redux";
import { mapActions, appActions } from "../actions";

const setLocation = () => {
  const dispatch = useDispatch();

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const longitude = coords.longitude;
      const latitude = coords.latitude;
      dispatch(mapActions.setLatitude(latitude));
      dispatch(mapActions.setLongitude(longitude));
      dispatch(appActions.setLocationLoaded());
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

export default setLocation;
