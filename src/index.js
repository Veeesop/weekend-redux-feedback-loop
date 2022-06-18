import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const emotionReducer = (
  state = { pageOne: 1, pageTwo: 1, pageThree: 1, pageFour: "" },
  action
) => {
  switch (action.type) {
    case "SET_PAGEONE_DATA":
      return { ...state, pageOne: action.payload };
    case "SET_PAGETWO_DATA":
      return { ...state, pageTwo: action.payload };
    case "SET_PAGETHREE_DATA":
      return { ...state, pageThree: action.payload };
    case "SET_PAGEFOUR_DATA":
      return { ...state, pageFour: action.payload };
  }
  return state;
};

const store = createStore(
  combineReducers({
    emotionReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
