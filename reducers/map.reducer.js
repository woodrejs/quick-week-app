import { COORDS_LOADED, SET_COORDS } from "../constans/VARIABLES";

const initState = {
  coords: {},
  coordsLoaded: false,
};

const map = (state = initState, action) => {
  switch (action.type) {
    case SET_COORDS:
      return { ...state, coords: action.payload };
    case COORDS_LOADED:
      return { ...state, coordsLoaded: action.payload };
    default:
      return state;
  }
};
export default map;
