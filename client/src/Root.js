import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./reducers/index";

import reduxPromise from "redux-promise";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return <Provider store={store}>{children}</Provider>;
};
