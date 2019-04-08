import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
