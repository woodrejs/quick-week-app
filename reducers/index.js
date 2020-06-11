import { combineReducers } from "redux";
import map from "./map.reducer";
import app from "./app.reducer";

const rootReducer = combineReducers({
  map,
  app,
});

export default rootReducer;
