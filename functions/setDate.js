import { searchActions } from "../actions";

const setDate = (date, label, dispatch) => {
  if (label === "to") dispatch(searchActions.setSearchDateTo(date));
  else dispatch(searchActions.setSearchDateFrom(date));
};

export default setDate;
