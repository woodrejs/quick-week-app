import { COORDS_LOADED, SET_COORDS } from "../constans/VARIABLES";

export const setCoords = (payload) => ({
  type: SET_COORDS,
  payload,
});

export const setCoordsLoaded = (payload) => ({
  type: COORDS_LOADED,
  payload,
});
