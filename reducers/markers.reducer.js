import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  displayedMarkers: "places",
  places: [],
  events: [],
};

const markers = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_PLACES_MARKERS:
      return { ...state, places: [...state.places, ...action.payload] };
    case VARIABLES.SET_EVENTS_MARKERS:
      return { ...state, events: [...state.events, ...action.payload] };
    case VARIABLES.SET_DISPLAYED_MARKERS:
      return { ...state, displayedMarkers: action.payload };
    default:
      return state;
  }
};

export default markers;
