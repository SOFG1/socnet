import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store.ts";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router basename="/socnet">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

window.store = store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
