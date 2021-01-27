import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATE = "SET_USER_DATE";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetch: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setUserDataAC = (userId, email, login, isFetch) => {
  return {
    type: SET_USER_DATE,
    data: {
      userId: userId,
      email: email,
      login: login,
      isFetch,
    },
  };
};

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.authMe();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setUserDataAC(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    dispatch(
      stopSubmit("login", {
        _error: message,
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setUserDataAC(null, null, null, false));
  }
};

export default authReducer;
