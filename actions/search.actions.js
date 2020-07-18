import {
  SET_SEARCH_PHRASE,
  SET_SEARCH_TYPE,
  SET_SEARCH_CATEGORIES,
  SET_SEARCH_DATE_FROM,
  SET_SEARCH_DATE_TO,
  SET_SEARCH_RESULTS,
} from "../constans/VARIABLES";

export const setSearchPhrase = (payload) => ({
  type: SET_SEARCH_PHRASE,
  payload,
});
export const setSearchType = (payload) => ({
  type: SET_SEARCH_TYPE,
  payload,
});
export const setSearchCategories = (payload) => ({
  type: SET_SEARCH_CATEGORIES,
  payload,
});
export const setSearchDateFrom = (payload) => ({
  type: SET_SEARCH_DATE_FROM,
  payload,
});
export const setSearchDateTo = (payload) => ({
  type: SET_SEARCH_DATE_TO,
  payload,
});

export const setResults = (payload) => ({
  type: SET_SEARCH_RESULTS,
  payload,
});
