import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import Root from "./Root";
import store from "./store";

const AppBundle = (
  <Provider store={store}>
    <Root />
  </Provider>
);
window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  });
};
