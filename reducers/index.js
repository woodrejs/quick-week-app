import { combineReducers } from "redux";
import map from "./map.reducer";
import app from "./app.reducer";
import markers from "./markers.reducer";
import search from "./search.reducer";

const rootReducer = combineReducers({
  map,
  app,
  markers,
  search,
});

export default rootReducer;
