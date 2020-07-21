import { COORDS_LOADED, SET_COORDS } from "../constans/VARIABLES";

const INITIAL_REGION = {
  latitude: 51.1078852,
  longitude: 17.0385376,
  latitudeDelta: 20,
  longitudeDelta: 20,
};

const initState = {
  coords: INITIAL_REGION,
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
