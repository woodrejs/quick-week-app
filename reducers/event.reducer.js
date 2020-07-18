import { SET_EVENT } from "../constans/VARIABLES";

const initState = {
  data: {},
};

const event = (state = initState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default event;
