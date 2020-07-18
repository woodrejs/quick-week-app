import {
  SET_PLACES_CATEGORIES,
  SET_EVENTS_CATEGORIES,
} from "../constans/VARIABLES";

const initState = {
  places: [],
  events: [],
};

const categories = (state = initState, action) => {
  switch (action.type) {
    case SET_PLACES_CATEGORIES:
      return { ...state, places: action.payload };
    case SET_EVENTS_CATEGORIES:
      return { ...state, events: action.payload };

    default:
      return state;
  }
};

export default categories;

/*
export const SET_PLACES_CATEGORIES = "SET_PLACES_CATEGORIES";
export const SET_EVENTS_CATEGORIES = "SET_EVENTS_CATEGORIES";

   case VARIABLES.SET_APP_LOADED:
      return { ...state, appReady: action.payload };
    case VARIABLES.SET_APP_lOADING:
      return { ...state, appReady: action.payload };
      */
