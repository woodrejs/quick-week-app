import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
import Init from "./utils/init";
import { decode, encode } from "base-64";

const App = () => {
  if (!global.btoa) global.btoa = encode;
  if (!global.atob) global.atob = decode;

  return (
    <Provider store={store}>
      <Init />
    </Provider>
  );
};

export default App;
