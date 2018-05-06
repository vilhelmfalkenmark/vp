import {
  CONTENT_FULFILLED,
  CONTENT_REJECTED
} from "../../src/store/actionTypes";

import { fetchContent } from "../../src/store/content/actions";
import configureStore from "../../src/store/";
import reducer, { initialState } from "../../src/store/content/reducer";

const store = configureStore();

// ////////////////////////////////////////////////
/**
 * CONTENT_FETCHING ACTION
 */
// ////////////////////////////////////////////////
describe("Content action types and reducer works as expected", () => {
  it("CONTENT_FETCHING Should set fetching to true", () => {
    const state = reducer(initialState, fetchContent());
    expect(state).toEqual({
      ...initialState,
      fetching: true
    });
  });

  // ////////////////////////////////////////////////
  /**
   * CONTENT_FULFILLED ACTION
   */
  // ////////////////////////////////////////////////
  it("CONTENT_FULFILLED Should set content store instance to fulfilled", () => {
    const state = reducer(
      initialState,
      store.dispatch({
        type: CONTENT_FULFILLED,
        response: { value: "MOCK_API_RESPONSE" }
      })
    );
    expect(state).toEqual({
      ...initialState,
      fetching: false,
      fulfilled: true,
      data: { value: "MOCK_API_RESPONSE" }
    });
  });

  // ////////////////////////////////////////////////
  /**
   * CONTENT_REJECTED ACTION
   */
  // ////////////////////////////////////////////////
  it("CONTENT_REJECTED Should set content store instance to rejeced", () => {
    const state = reducer(
      initialState,
      store.dispatch({
        type: CONTENT_REJECTED,
        response: "Could not get data from api"
      })
    );
    expect(state).toEqual({
      ...initialState,
      fetching: false,
      fulfilled: false,
      rejected: true,
      message: "Could not get data from api"
    });
  });
});
