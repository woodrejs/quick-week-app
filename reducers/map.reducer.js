import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  date: new Date().toISOString().slice(0, 10),
  places: true,
  events: false,
  mapCoords: {},
};

const map = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.INCREMENT_DATE:
      return { ...state, date: action.date };
    case VARIABLES.DECREMENT_DATE:
      return { ...state, date: action.date };
    case VARIABLES.SET_PLACES:
      return { ...state, places: !state.places };
    case VARIABLES.SET_EVENTS:
      return { ...state, events: !state.events };
    case VARIABLES.SET_MAP_COORDINATES:
      return { ...state, mapCoords: action.payload };
    case VARIABLES.SET_INITIAL_REGION:
      return { ...state, initialRegion: payload };
    default:
      return state;
  }
};
export default map;

/*
  case VARIABLES.SET_LONGITUDE:
      return {
        ...state,
        location: {
          ...state.location,
          ...{ longitude: action.payload },
        },
      };

      */
