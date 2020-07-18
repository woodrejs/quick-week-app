import { SET_PLAN_EVENTS } from "../constans/VARIABLES";

const initState = {
  events: [],
};

const plan = (state = initState, action) => {
  switch (action.type) {
    case SET_PLAN_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export default plan;
