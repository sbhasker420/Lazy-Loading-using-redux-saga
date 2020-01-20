import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import fetchSaga from "./saga/fetchSaga";
import reducer from "./store/reducer";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

/// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
