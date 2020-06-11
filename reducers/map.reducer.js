import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  date: new Date().toISOString().slice(0, 10),
  places: true,
  events: false,
  location: {
    latitude: 51.108507,
    longitude: 17.012231,
    delta: 0.05,
  },
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
    case VARIABLES.SET_LONGITUDE:
      return {
        ...state,
        location: {
          ...state.location,
          ...{ longitude: action.payload },
        },
      };
    case VARIABLES.SET_LATITUDE:
      return {
        ...state,
        location: {
          ...state.location,
          ...{ latitude: action.payload },
        },
      };
    default:
      return state;
  }
};
export default map;
