import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { dogSagas } from "./sagas";

import { reducer } from "./reducer";

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(dogSagas);
  return store;
};
