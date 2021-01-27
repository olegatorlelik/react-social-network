import React from "react";
import { getAuthUserData } from "./auth-reducer";

const SET_INITIALAZED = "SET_INITIALAZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALAZED:
      return {
        ...state,
        initialized: action.payload,
      };

    default:
      return state;
  }
};
export const initialazedSuccess = () => {
  return {
    type: SET_INITIALAZED,
    payload: true,
  };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then((response) => {
    dispatch(initialazedSuccess());
  });
};

export default appReducer;
