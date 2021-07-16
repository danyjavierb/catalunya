import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//importar Provider
import { Provider } from "react-redux";
// importar reducers
import { reducers } from "./state/reducers";
// importar createStore
import { todos } from "./state/reducers/todoReducerMejorado";

import { configureStore } from "@reduxjs/toolkit";
// crear el store
const store = configureStore({ reducer: todos });
store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
