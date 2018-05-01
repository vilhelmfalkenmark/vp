import {
  MOVIES_FETCHING,
  MOVIES_FULFILLED,
  MOVIES_REJECTED,
  SET_MESSAGE
} from "../actionTypes";

export const fetchMovies = () => ({
  type: MOVIES_FETCHING
});

export const setMessage = messageText => ({
  type: SET_MESSAGE,
  message: messageText
});

export const setAsyncMessage = messageText => dispatch =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 200);
  }).then(() => dispatch(setMessage(messageText)));
