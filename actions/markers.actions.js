import * as VARIABLES from "../constans/VARIABLES";

export const setPlacesMarkers = (data) => {
  const payload = data.map((item) => {
    const { id, title, longDescription, address, location } = item;

    return {
      id,
      title,
      longDescription,
      street: address.street,
      latitude: location.lattiude,
      longitude: location.longitude,
      type: "place",
    };
  });
  return {
    type: VARIABLES.SET_PLACES_MARKERS,
    payload,
  };
};
export const setEventsMarkers = (data) => {
  const payload = data.reduce((array, item) => {
    if ("events" in item)
      if ("address" in item.events[0])
        if ("location" in item.events[0])
          if ("placeName" in item.events[0])
            if ("lattiude" in item.events[0].location)
              if ("endDate" in item.events[0]) {
                const { id, title, longDescription } = item;
                const events = item.events[0];
                array.push({
                  id,
                  title,
                  longDescription,
                  street: events.address.street,
                  latitude: events.location.lattiude,
                  longitude: events.location.longitude,
                  placeName: events.placeName,
                  type: "event",
                  startDate: events.startDate.slice(0, 10),
                  endDate: events.endDate.slice(0, 10),
                });
              }
    return array;
  }, []);

  return {
    type: VARIABLES.SET_EVENTS_MARKERS,
    payload,
  };
};
export const setDisplayedMarkers = (payload) => ({
  type: VARIABLES.SET_DISPLAYED_MARKERS,
  payload,
});
