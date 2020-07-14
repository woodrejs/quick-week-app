import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  type: true,
  places: [],
  events: [],
};

const markers = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_PLACES_MARKERS:
      return { ...state, places: [...state.places, ...action.payload] };
    case VARIABLES.SET_EVENTS_MARKERS:
      return { ...state, events: [...state.events, ...action.payload] };
    case VARIABLES.SET_TYPE_MARKERS:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export default markers;
