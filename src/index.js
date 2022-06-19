import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const emotionReducer = (
  state = { feeling: 1, understanding: 1, support: 1, comments: "" },
  action
) => {
  switch (action.type) {
    case "SET_FEELING_DATA":
      return { ...state, feeling: action.payload };
    case "SET_UNDERSTANDING_DATA":
      return { ...state, understanding: action.payload };
    case "SET_SUPPORT_DATA":
      return { ...state, support: action.payload };
    case "SET_COMMENTS_DATA":
      return { ...state, comments: action.payload };
    case "RESET_EMOTIONS":
      return action.payload;
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
