import { combineReducers } from "redux";
import map from "./map.reducer";
import app from "./app.reducer";
import markers from "./markers.reducer";
import search from "./search.reducer";
import events from "./events.reducer";
import user from "./user.reducer";
import favorites from "./favorites.reducer";

const rootReducer = combineReducers({
  map,
  app,
  markers,
  search,
  events,
  user,
  favorites,
});

export default rootReducer;
