import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  appReady: false,
  isFontsLoaded: false,
  isLocationLoaded: false,
};

const app = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.FONTS_LOADED:
      return { ...state, isFontsLoaded: action.payload };
    case VARIABLES.FONTS_LOADING:
      return { ...state, isFontsLoaded: action.payload };
    case VARIABLES.LOCATION_LOADED:
      return { ...state, isLocationLoaded: action.payload };
    case VARIABLES.LOCATION_LOADING:
      return { ...state, isLocationLoaded: action.payload };
    default:
      return state;
  }
};

export default app;

/*
   case VARIABLES.SET_APP_LOADED:
      return { ...state, appReady: action.payload };
    case VARIABLES.SET_APP_lOADING:
      return { ...state, appReady: action.payload };
      */
