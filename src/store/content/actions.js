import {
  CONTENT_FETCHING,
  CONTENT_FULFILLED,
  CONTENT_REJECTED
} from "../actionTypes";

import { getRequest } from "../../utils/network";

import { contentFiltered } from "../../utils/selectors";

export const fetchContent = () => {
  return function(dispatch) {
    dispatch({ type: CONTENT_FETCHING });
    getRequest("samtliga")
      .then(response => {
        dispatch({
          type: CONTENT_FULFILLED,
          response: contentFiltered(response)
        });
      })
      .catch(err => {
        dispatch({ type: CONTENT_REJECTED, response: err });
      });
  };
};
