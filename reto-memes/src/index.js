import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { combinedReducers } from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { receiveMemesAction } from "./state/memes.duck";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: combinedReducers,
});

store.subscribe(() => {
  console.log("store", store.getState());
});

store.dispatch(receiveMemesAction());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
