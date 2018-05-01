import {
  CONTENT_FETCHING,
  CONTENT_FULFILLED,
  CONTENT_REJECTED,
  SET_MESSAGE
} from "../actionTypes";

const initialState = {
  message: "",
  fetching: false,
  fulfilled: false,
  rejected: false,
  data: {}
};

const content = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_FETCHING:
      return {
        ...state,
        fetching: true,
        message: action.message
      };

    case CONTENT_FULFILLED:
      return {
        ...state,
        fetching: false,
        fulfilled: true,
        message: "FÄRDIGHÄMTAD",
        data: { ...action.response }
      };

    case CONTENT_REJECTED:
      return {
        ...state,
        fetching: false,
        fulfilled: false,
        rejected: true,
        message: "DET BLEV EN ERROR"
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
};

export default content;
