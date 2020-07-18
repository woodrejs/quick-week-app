import {
  SET_FAVORITES_EVENTS,
  SET_FAVORITES_PLACES,
} from "../constans/VARIABLES";

const initState = {
  places: [],
  events: [],
};

const favorites = (state = initState, action) => {
  switch (action.type) {
    case SET_FAVORITES_PLACES:
      return { ...state, places: action.payload };
    case SET_FAVORITES_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export default favorites;
