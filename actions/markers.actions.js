import * as VARIABLES from "../constans/VARIABLES";
import {
  convertEventMarker,
  convertPlaceMarker,
} from "../functions/convertData";

export const setPlacesMarkers = (data) => {
  const payload = data.reduce((array, item) => {
    if ("title" in item)
      if ("longDescription" in item)
        if ("venue" in item)
          if ("location" in item)
            if ("address" in item)
              if ("carParkAvailable" in item.venue)
                if ("telephone" in item.venue)
                  if ("email" in item.venue)
                    array.push(convertPlaceMarker(item));

    return array;
  }, []);

  return {
    type: VARIABLES.SET_PLACES_MARKERS,
    payload,
  };
};
export const setEventsMarkers = (data) => {
  console.log(data);
  const payload = data.reduce((array, item) => {
    if ("events" in item)
      if ("longDescription" in item)
        if ("address" in item.events[0])
          if ("location" in item.events[0])
            if ("placeName" in item.events[0])
              if ("lattiude" in item.events[0].location)
                if ("endDate" in item.events[0])
                  if ("place" in item.events[0])
                    if ("venue" in item.events[0].place)
                      if ("carParkAvailable" in item.events[0].place.venue)
                        if ("telephone" in item.events[0].place.venue)
                          if ("email" in item.events[0].place.venue)
                            array.push(convertEventMarker(item));

    return array;
  }, []);

  return {
    type: VARIABLES.SET_EVENTS_MARKERS,
    payload,
  };
};
export const setTypeMarkers = (payload) => ({
  type: VARIABLES.SET_TYPE_MARKERS,
  payload,
});
