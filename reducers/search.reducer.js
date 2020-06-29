import * as VARIABLES from "../constans/VARIABLES";
const initState = {
  step: 1,
  phrase: "",
  type: true,
  categories: [],
  dateFrom: null,
  dateTo: null,
  results: [],
};

const search = (state = initState, action) => {
  switch (action.type) {
    case VARIABLES.SET_SEARCH_PHRASE:
      return { ...state, phrase: action.payload };
    case VARIABLES.SET_SEARCH_TYPE:
      return { ...state, type: action.payload };
    case VARIABLES.SET_SEARCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case VARIABLES.SET_SEARCH_DATE_FROM:
      return { ...state, dateFrom: action.payload };
    case VARIABLES.SET_SEARCH_DATE_TO:
      return { ...state, dateTo: action.payload };
    case VARIABLES.SET_STEP:
      return { ...state, step: action.payload };
    case VARIABLES.SET_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default search;
