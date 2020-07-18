import {
  SET_PLACES_CATEGORIES,
  SET_EVENTS_CATEGORIES,
} from "../constans/VARIABLES";

export const setPlacesCategories = (payload) => ({
  type: SET_PLACES_CATEGORIES,
  payload,
});
export const setEventsCategories = (payload) => ({
  type: SET_EVENTS_CATEGORIES,
  payload,
});
