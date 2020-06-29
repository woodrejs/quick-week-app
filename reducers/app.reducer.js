import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  isFontsLoaded: false,
  isCoordsLoaded: false,
  isPlacesMarkersLoaded: false,
  isEventsMarkersLoaded: false,
  placesCategories: null,
  eventsCategories: null,
};

const app = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.FONTS_LOADED:
      return { ...state, isFontsLoaded: action.payload };
    case VARIABLES.FONTS_LOADING:
      return { ...state, isFontsLoaded: action.payload };
    case VARIABLES.COORDS_LOADED:
      return { ...state, isCoordsLoaded: action.payload };
    case VARIABLES.COORDS_LOADING:
      return { ...state, isCoordsLoaded: action.payload };
    case VARIABLES.PLACES_MARKERS_LOADED:
      return { ...state, isPlacesMarkersLoaded: action.payload };
    case VARIABLES.EVENTS_MARKERS_LOADED:
      return { ...state, isEventsMarkersLoaded: action.payload };
    case VARIABLES.SET_PLACES_CATEGORIES:
      return { ...state, placesCategories: action.payload };
    case VARIABLES.SET_EVENTS_CATEGORIES:
      return { ...state, eventsCategories: action.payload };

    default:
      return state;
  }
};

export default app;

/*
export const SET_PLACES_CATEGORIES = "SET_PLACES_CATEGORIES";
export const SET_EVENTS_CATEGORIES = "SET_EVENTS_CATEGORIES";

   case VARIABLES.SET_APP_LOADED:
      return { ...state, appReady: action.payload };
    case VARIABLES.SET_APP_lOADING:
      return { ...state, appReady: action.payload };
      */
