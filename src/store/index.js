import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "./rootReducer";

/**
 * Apply middleware
 */
const middleware = applyMiddleware(promise(), thunk);

/**
 * REDUX DEVTOOLS
 */

// const reduxDevTools = window
//   ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   : null;

// if (process.env.NODE_ENV === "development") {
// } else {
//   const store = createStore(rootReducer, middleware);
// }
const store = createStore(rootReducer, /*reduxDevTools,*/ middleware);

export default store;
