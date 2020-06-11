import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
import Init from "./utils";

const App = () => {
  return (
    <Provider store={store}>
      <Init />
    </Provider>
  );
};

export default App;

/// init
/*
const KEY = "1319679107135189731165976618182301395321";
fetch(`http://go.wroclaw.pl/api/v1.0/enums/typeGroupTags/forOffers/?key=${KEY}`)
  .then((response) => response.json())
  .then((data) => store.dispatch(getCategoriesNames(data)));
*/
