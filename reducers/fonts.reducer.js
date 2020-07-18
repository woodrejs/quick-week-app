import { FONTS_LOADED } from "../constans/VARIABLES";

const initState = { fontsLoaded: false };

const fonts = (state = initState, action) => {
  switch (action.type) {
    case FONTS_LOADED:
      return { fontsLoaded: action.payload };
    default:
      return state;
  }
};

export default fonts;
