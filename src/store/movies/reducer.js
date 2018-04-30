import {
  MOVIES_FETCHING,
  MOVIES_FULFILLED,
  MOVIES_REJECTED
} from "../actionTypes";

const initialState = {
  message: "",
  fetching: false,
  fulfilled: false,
  rejected: false,
  data: []
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_FETCHING:
      return {
        ...state,
        fetching: true,
        message: action.message
      };

    case MOVIES_FULFILLED:
      return {
        ...state,
        fetching: false,
        fulfilled: true,
        message: "FÄRDIGHÄMTAD",
        data: [...action.payload]
      };

    case MOVIES_REJECTED:
      return {
        ...state,
        fetching: false,
        fulfilled: false,
        rejected: true,
        message: "DET BLEV EN ERROR"
      };

    default:
      return state;
  }
};

export default movies;
