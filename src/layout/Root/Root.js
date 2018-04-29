import React from "react";
import { Provider } from "react-redux";

import store from "store";
import Departures from "components/Departures";
import s from "./Root.css";

export const RootComponent = () => (
  <Provider store={store}>
    <div>
      <h4 className={s.test}>HEJ!</h4>
      <Departures />
    </div>
  </Provider>
);

export default RootComponent;
