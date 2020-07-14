import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  places: [],
  events: [],
  planEvents: [],
};

const favorites = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_FAVORITES_PLACES:
      return { ...state, places: action.payload };
    case VARIABLES.SET_FAVORITES_EVENTS:
      return { ...state, events: action.payload };
    case VARIABLES.SET_PLAN_EVENTS:
      return { ...state, planEvents: action.payload };
    default:
      return state;
  }
};

export default favorites;
