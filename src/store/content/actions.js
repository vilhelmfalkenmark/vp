import {
  CONTENT_FETCHING,
  CONTENT_FULFILLED,
  CONTENT_REJECTED,
  SET_MESSAGE
} from "../actionTypes";

import { getRequest, API_BASE } from "../../utils/network";

import { contentFiltered } from "../../utils/selectors";

export const setMessage = messageText => ({
  type: SET_MESSAGE,
  message: messageText
});

export const fetchContent = () => {
  return function(dispatch) {
    dispatch({ type: CONTENT_FETCHING });
    getRequest(`${API_BASE}/samtliga`)
      .then(response => {
        const contentFilteredTest = contentFiltered(response);
        console.log(contentFilteredTest, " <-- contentFiltered");

        dispatch({
          type: CONTENT_FULFILLED,
          response: contentFilteredTest
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
