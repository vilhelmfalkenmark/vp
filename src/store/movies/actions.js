import {
  MOVIES_FETCHING,
  MOVIES_FULFILLED,
  MOVIES_REJECTED
} from "../actionTypes";

export const setMessage = messageText => ({
  type: MOVIES_FETCHING,
  message: "HEJSAN FRÅN ACTION"
});
