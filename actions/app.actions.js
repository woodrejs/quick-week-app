import * as VARIABLES from "../constans/VARIABLES";

export const setFontsLoaded = () => ({
  type: VARIABLES.FONTS_LOADED,
  payload: true,
});
export const setFontsLoading = () => ({
  type: VARIABLES.FONTS_LOADING,
  payload: false,
});
export const setLocationLoaded = () => ({
  type: VARIABLES.LOCATION_LOADED,
  payload: true,
});
export const setLocationLoading = () => ({
  type: VARIABLES.LOCATION_LOADING,
  payload: false,
});

/*


export const setAppLoaded = () => ({
  type: VARIABLES.SET_APP_READY,
  payload: true,
});
export const setAppLoading = () => ({
  type: VARIABLES.SET_APP_lOADING,
  payload: false,
});

*/
