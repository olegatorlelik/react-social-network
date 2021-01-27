import React from "react";
import { weatherAPI } from "../api/api";
const SET_WEATHER = "SET_WEATHER";

const initialState = {
  state: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      console.log(SET_WEATHER);
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

const inistilizes = (payload) => {
  return {
    type: SET_WEATHER,
    payload,
  };
};

export const getWeather = () => async (dispatch) => {
  let promise = await weatherAPI.weather();
  dispatch(inistilizes(promise));
};
export default newsReducer;
