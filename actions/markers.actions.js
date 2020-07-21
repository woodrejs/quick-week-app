import {
  SET_PLACES_MARKERS,
  SET_EVENTS_MARKERS,
  SET_TYPE_MARKERS,
  PLACES_MARKERS_LOADED,
  EVENTS_MARKERS_LOADED,
} from "../constans/VARIABLES";
import {
  convertEventMarker,
  convertPlaceMarker,
} from "../functions/convertData";

export const setPlacesMarkers = (data) => {
  console.log(data);
  const payload = data.reduce((array, item) => {
    if ("venue" in item)
      if ("carParkAvailable" in item.venue)
        if ("telephone" in item.venue)
          if ("email" in item.venue)
            if ("mainImage" in item)
              if ("location" in item)
                if ("address" in item)
                  if ("street" in item.address)
                    if ("longDescription" in item)
                      if ("title" in item) array.push(convertPlaceMarker(item));

    return array;
  }, []);

  return {
    type: SET_PLACES_MARKERS,
    payload,
  };
};
export const setEventsMarkers = (data) => {
  const payload = data.reduce((array, item) => {
    if ("events" in item)
      if ("ticketing" in item.events[0])
        if ("mainImage" in item)
          if ("address" in item.events[0])
            if ("placeName" in item.events[0])
              if ("location" in item.events[0])
                if ("lattiude" in item.events[0].location)
                  if ("longitude" in item.events[0].location)
                    if ("startDate" in item.events[0])
                      if ("longDescription" in item)
                        array.push(convertEventMarker(item));

    return array;
  }, []);

  return {
    type: SET_EVENTS_MARKERS,
    payload,
  };
};
export const setTypeMarkers = (payload) => ({
  type: SET_TYPE_MARKERS,
  payload,
});
export const setPlacesMarkersLoaded = () => ({
  type: PLACES_MARKERS_LOADED,
  payload: true,
});
export const setEventsMarkersLoaded = () => ({
  type: EVENTS_MARKERS_LOADED,
  payload: true,
});
