import React from "react";
import store from "./Store";
import { Provider } from "react-redux";

import Init from "./utils/init";

const App = () => {
  return (
    <Provider store={store}>
      <Init />
    </Provider>
  );
};

export default App;
