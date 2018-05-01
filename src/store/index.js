import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import rootReducer from "./rootReducer";

const reduxDevTools =
  typeof window === "object"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => null;

const createStoreWithMiddleware = compose(applyMiddleware(promise(), thunk))(
  createStore
);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState, reduxDevTools);
}
