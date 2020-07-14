import * as VARIABLES from "../constans/VARIABLES";

export const setFavoritesEvents = (payload) => ({
  type: VARIABLES.SET_FAVORITES_EVENTS,
  payload,
});
export const setFavoritesPlaces = (payload) => ({
  type: VARIABLES.SET_FAVORITES_PLACES,
  payload,
});
export const setPlanEvents = (payload) => ({
  type: VARIABLES.SET_PLAN_EVENTS,
  payload,
});
