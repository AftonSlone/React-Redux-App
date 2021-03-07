import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { cardReducer } from "./store/reducers";

import App from "./App";

import GlobalStyle from "./styles/globalStyles";

const store = createStore(cardReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />

    <App />
  </Provider>,
  document.getElementById("root")
);
