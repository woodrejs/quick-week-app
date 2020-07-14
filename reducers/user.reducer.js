import * as VARIABLES from "../constans/VARIABLES";

const initState = {
  isLogged: false,
  password: null,
  mail: null,
  id: null,
};
const user = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_USER_PASSWORD:
      return { ...state, password: action.payload };
    case VARIABLES.SET_USER_MAIL:
      return { ...state, mail: action.payload };
    case VARIABLES.SET_USER_LOGIN:
      return { ...state, isLogged: action.payload };
    case VARIABLES.SET_USER_LOGOUT:
      return { ...state, isLogged: action.payload };
    case VARIABLES.SET_USER_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default user;
