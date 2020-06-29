import * as VARIABLES from "../constans/VARIABLES";

export const setFontsLoaded = () => ({
  type: VARIABLES.FONTS_LOADED,
  payload: true,
});
export const setFontsLoading = () => ({
  type: VARIABLES.FONTS_LOADING,
  payload: false,
});
export const setCoordsLoaded = () => ({
  type: VARIABLES.COORDS_LOADED,
  payload: true,
});
export const setCoordsLoading = () => ({
  type: VARIABLES.COORDS_LOADING,
  payload: false,
});
export const setPlacesMarkersLoaded = () => ({
  type: VARIABLES.PLACES_MARKERS_LOADED,
  payload: true,
});
export const setEventsMarkersLoaded = () => ({
  type: VARIABLES.EVENTS_MARKERS_LOADED,
  payload: true,
});
export const setPlacesCategories = (payload) => ({
  type: VARIABLES.SET_PLACES_CATEGORIES,
  payload,
});
export const setEventsCategories = (payload) => ({
  type: VARIABLES.SET_EVENTS_CATEGORIES,
  payload,
});
/*

export const SET_PLACES_CATEGORIES = "SET_PLACES_CATEGORIES";
export const SET_EVENTS_CATEGORIES = "SET_EVENTS_CATEGORIES";
export const setAppLoaded = () => ({
  type: VARIABLES.SET_APP_READY,
  payload: true,
});
export const setAppLoading = () => ({
  type: VARIABLES.SET_APP_lOADING,
  payload: false,
});

*/
