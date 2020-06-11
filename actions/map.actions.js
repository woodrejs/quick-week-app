import * as VARIABLES from "../constans/VARIABLES";

export const incrementDate = (date) => ({
  type: VARIABLES.INCREMENT_DATE,
  date,
});
export const decrementDate = (date) => ({
  type: VARIABLES.DECREMENT_DATE,
  date,
});
export const setPlaces = () => ({ type: VARIABLES.SET_PLACES });
export const setEvents = () => ({ type: VARIABLES.SET_EVENTS });
export const setLongitude = (payload) => ({
  type: VARIABLES.SET_LONGITUDE,
  payload,
});
export const setLatitude = (payload) => ({
  type: VARIABLES.SET_LATITUDE,
  payload,
});
