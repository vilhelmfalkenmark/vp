import {
  CONTENT_FETCHING,
  CONTENT_FULFILLED,
  CONTENT_REJECTED,
  SET_MESSAGE
} from "../actionTypes";

import { getRequest, API_BASE } from "../../utils/network";

import { moviesFiltered } from "../../utils/selectors";

export const setMessage = messageText => ({
  type: SET_MESSAGE,
  message: messageText
});

export const fetchContent = () => {
  return function(dispatch) {
    dispatch({ type: CONTENT_FETCHING });
    getRequest(`${API_BASE}/samtliga`)
      .then(response => {
        const moviesFilteredTest = moviesFiltered(response);
        console.log(moviesFilteredTest, " <-- moviesFiltered");

        dispatch({
          type: CONTENT_FULFILLED,
          response: moviesFilteredTest
        });
      })
      .catch(err => {
        dispatch({ type: CONTENT_REJECTED, response: err });
      });
  };
};

// Test purpose only for SSR
export const setAsyncMessage = messageText => dispatch =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 200);
  }).then(() => dispatch(setMessage(messageText)));
