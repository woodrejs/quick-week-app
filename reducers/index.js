import { combineReducers } from "redux";
import map from "./map.reducer";
import categories from "./categories.reducer";
import markers from "./markers.reducer";
import search from "./search.reducer";
import event from "./event.reducer";
import user from "./user.reducer";
import favorites from "./favorites.reducer";
import fonts from "./fonts.reducer";
import plan from "./plan.reducer";

const rootReducer = combineReducers({
  map,
  categories,
  markers,
  search,
  event,
  user,
  favorites,
  fonts,
  plan,
});

export default rootReducer;
