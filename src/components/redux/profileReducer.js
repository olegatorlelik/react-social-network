import React from "react";
import { profailAPI } from "../api/api";
const SET_USER_PROFAIL = "SET_USER_PROFAIL";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELET_USER_POST = "DELET_USER_POST";

let initialState = {
  posts: [],
  profile: null,
  status: "Обновить статус",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Math.round(Math.random() * (10 - 0) + 0),
            message: action.post,
          },
        ],
      };
    }

    case SET_USER_PROFAIL: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELET_USER_POST: {
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export let addPostActionCreater = (post) => {
  return {
    type: "ADD_POST",
    post,
  };
};

export let setUserProfail = (profile) => {
  return {
    type: SET_USER_PROFAIL,
    profile,
  };
};

export let setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};

export let deletPost = (id) => {
  return {
    type: DELET_USER_POST,
    id,
  };
};

export const getUserProfail = (userId) => async (dispatch) => {
  let response = await profailAPI.getProfail(userId);
  dispatch(setUserProfail(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profailAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profailAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
  console.log("Красавчик ты не получил RESPONSE");
};

export default profileReducer;
