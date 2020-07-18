import {
  SET_FAVORITES_EVENTS,
  SET_FAVORITES_PLACES,
} from "../constans/VARIABLES";

export const setFavoritesEvents = (payload) => ({
  type: SET_FAVORITES_EVENTS,
  payload,
});
export const setFavoritesPlaces = (payload) => ({
  type: SET_FAVORITES_PLACES,
  payload,
});
