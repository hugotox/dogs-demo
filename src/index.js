import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initStore } from "./store";
import { AppContainer } from "./AppContainer";

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
