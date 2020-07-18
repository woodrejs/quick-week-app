import {
  SET_SEARCH_PHRASE,
  SET_SEARCH_TYPE,
  SET_SEARCH_CATEGORIES,
  SET_SEARCH_DATE_FROM,
  SET_SEARCH_DATE_TO,
  SET_SEARCH_RESULTS,
} from "../constans/VARIABLES";

const initState = {
  phrase: "",
  type: true,
  categories: [],
  dateFrom: null,
  dateTo: null,
  results: [],
};

const search = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_PHRASE:
      return { ...state, phrase: action.payload };
    case SET_SEARCH_TYPE:
      return { ...state, type: action.payload };
    case SET_SEARCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_SEARCH_DATE_FROM:
      return { ...state, dateFrom: action.payload };
    case SET_SEARCH_DATE_TO:
      return { ...state, dateTo: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default search;
