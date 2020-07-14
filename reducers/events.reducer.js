import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  event: null,
};

const events = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_EVENT:
      return { ...state, event: action.payload };
    default:
      return state;
  }
};

export default events;
