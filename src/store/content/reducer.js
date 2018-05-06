import {
  CONTENT_FETCHING,
  CONTENT_FULFILLED,
  CONTENT_REJECTED
} from "../actionTypes";

export const initialState = {
  message: "",
  fetching: true,
  fulfilled: false,
  rejected: false,
  data: {}
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_FETCHING:
      return {
        ...state,
        fetching: true
      };

    case CONTENT_FULFILLED:
      return {
        ...state,
        fetching: false,
        fulfilled: true,
        data: { ...action.response }
      };

    case CONTENT_REJECTED:
      return {
        ...state,
        fetching: false,
        fulfilled: false,
        rejected: true,
        message:
          action.response || "Det blev en generisk error utan felmeddelande"
      };

    default:
      return state;
  }
};

export default content;
