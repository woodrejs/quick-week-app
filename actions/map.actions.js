import * as VARIABLES from "../constans/VARIABLES";

export const incrementDate = (date) => ({
  type: VARIABLES.INCREMENT_DATE,
  date,
});
export const decrementDate = (date) => ({
  type: VARIABLES.DECREMENT_DATE,
  date,
});
export const setMapCoords = (payload) => ({
  type: VARIABLES.SET_MAP_COORDINATES,
  payload,
});
export const setInitialRegion = () => ({
  type: VARIABLES.SET_INITIAL_REGION,
  payload,
});
export const setPlaces = () => ({ type: VARIABLES.SET_PLACES });
export const setEvents = () => ({ type: VARIABLES.SET_EVENTS });
