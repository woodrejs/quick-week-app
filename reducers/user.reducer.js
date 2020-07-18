import {
  SET_USER_PASSWORD,
  SET_USER_MAIL,
  SET_USER_ID,
  SET_USER_LOGGED,
} from "../constans/VARIABLES";

const initState = {
  password: "Konik18",
  mail: "M@wp.pl",
  id: null,
  logged: false,
};
const user = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_PASSWORD:
      return { ...state, password: action.payload };
    case SET_USER_MAIL:
      return { ...state, mail: action.payload };
    case SET_USER_LOGGED:
      return { ...state, logged: action.payload };
    case SET_USER_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default user;
