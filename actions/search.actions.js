import * as VARIABLES from "../constans/VARIABLES";

export const setSearchPhrase = (payload) => ({
  type: VARIABLES.SET_SEARCH_PHRASE,
  payload,
});
export const setSearchType = (payload) => ({
  type: VARIABLES.SET_SEARCH_TYPE,
  payload,
});
export const setSearchCategories = (payload) => ({
  type: VARIABLES.SET_SEARCH_CATEGORIES,
  payload,
});
export const setSearchDateFrom = (payload) => ({
  type: VARIABLES.SET_SEARCH_DATE_FROM,
  payload,
});
export const setSearchDateTo = (payload) => ({
  type: VARIABLES.SET_SEARCH_DATE_TO,
  payload,
});
export const setStep = (payload) => ({
  type: VARIABLES.SET_STEP,
  payload,
});
export const setResults = (payload) => ({
  type: VARIABLES.SET_RESULTS,
  payload,
});
