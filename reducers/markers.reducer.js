import {
  SET_PLACES_MARKERS,
  SET_EVENTS_MARKERS,
  SET_TYPE_MARKERS,
  PLACES_MARKERS_LOADED,
  EVENTS_MARKERS_LOADED,
} from "../constans/VARIABLES";

const initState = {
  displayedType: true, //true for 'places', false for 'events
  places: [],
  placesLoaded: false,
  events: [],
  eventsLoaded: false,
};

const markers = (state = initState, action) => {
  switch (action.type) {
    case SET_PLACES_MARKERS:
      return { ...state, places: [...state.places, ...action.payload] };
    case SET_EVENTS_MARKERS:
      return { ...state, events: [...state.events, ...action.payload] };
    case SET_TYPE_MARKERS:
      return { ...state, displayedType: action.payload };
    case PLACES_MARKERS_LOADED:
      return { ...state, placesLoaded: action.payload };
    case EVENTS_MARKERS_LOADED:
      return { ...state, eventsLoaded: action.payload };
    default:
      return state;
  }
};

export default markers;
