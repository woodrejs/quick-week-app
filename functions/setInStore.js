import DATE from "../constans/DATE";
import { auth } from "../utils/firebase";
import {
  eventActions,
  categoriesActions,
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
  dispatch(eventActions.setEvent(place));
};

export const storeEvent = async (id, dispatch) => {
  const data = await fetchEvent(id);
  dispatch(eventActions.setEvent(data));
};

export const storeCategories = async (dispatch) => {
  const placesCategories = await fetchCategories(true);
  const eventsCategories = await fetchCategories(false);

  dispatch(categoriesActions.setPlacesCategories(placesCategories));
  dispatch(categoriesActions.setEventsCategories(eventsCategories));
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
      dispatch(mapActions.setCoords(initialCoords));
      dispatch(mapActions.setCoordsLoaded(true));
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
  dispatch(markersActions.setPlacesMarkersLoaded());
};

export const storeEventsMarkers = async (dispatch) => {
  const KEY = process.env.KEY;
  const FROM = DATE.from;
  const TO = DATE.to;
  const URL = `https://go.wroclaw.pl/api/v1.0/offers/?key=${KEY}&time-from=${FROM}&time-to=${TO}&page-size=200`;
  const markers = await fetchMarkers(URL);
  dispatch(markersActions.setEventsMarkers(markers));
  dispatch(markersActions.setEventsMarkersLoaded());
};

export const storeUserInfo = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(userActions.setUserLogged(true));
      dispatch(userActions.setUserId(user.uid));
    } else {
      dispatch(userActions.setUserLogged(false));
      dispatch(userActions.setUserId(null));
    }
  });
};
