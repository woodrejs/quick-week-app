import DATE from "../constans/DATE";
import { auth } from "../utils/firebase";
import {
  eventsActions,
  appActions,
  mapActions,
  markersActions,
  userActions,
} from "../actions";
import {
  fetchCategories,
  fetchMarkers,
  fetchPlace,
  fetchEvent,
} from "./fetchData";

export const storePlace = async (id, dispatch) => {
  const place = await fetchPlace(id);
  dispatch(eventsActions.setEvent(place));
};

export const storeEvent = async (id, dispatch) => {
  const place = await fetchEvent(id);
  dispatch(eventsActions.setEvent(place));
};

export const storeCategories = async (dispatch) => {
  const placesCategories = await fetchCategories(true);
  const eventsCategories = await fetchCategories(false);

  dispatch(appActions.setPlacesCategories(placesCategories));
  dispatch(appActions.setEventsCategories(eventsCategories));
};

export const storeInitCoords = async (dispatch) => {
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
};

export const storePlacesMarkers = async (dispatch) => {
  const KEY = process.env.KEY;
  const URL = `https://go.wroclaw.pl/api/v1.0/places/?key=${KEY}&page-size=200&type-id=10`;
  const markers = await fetchMarkers(URL);
  dispatch(markersActions.setPlacesMarkers(markers));
  dispatch(appActions.setPlacesMarkersLoaded());
};

export const storeEventsMarkers = async (dispatch) => {
  const KEY = process.env.KEY;
  const FROM = DATE.from;
  const TO = DATE.to;
  const URL = `https://go.wroclaw.pl/api/v1.0/offers/?key=${KEY}&time-from=${FROM}&time-to=${TO}&page-size=200`;
  const markers = await fetchMarkers(URL);
  console.log(markers);
  dispatch(markersActions.setEventsMarkers(markers));
  dispatch(appActions.setEventsMarkersLoaded());
};

export const storeUserInfo = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(userActions.setUserLogin());
      dispatch(userActions.setUserId(user.uid));
    } else {
      dispatch(userActions.setUserLogout());
      dispatch(userActions.setUserId(null));
    }
  });
};
