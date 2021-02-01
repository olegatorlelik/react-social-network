import React from "react";
import { userAPI } from "../api/api";
import { updateObjectInArray } from "../Util/objectHelper";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGLE_FOLOWING_PROGRESS = "TOGLE_FOLOWING_PROGRESS";
let initialState = {
  users: [],
  pageSize: 5,
  totalaUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgres: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_COUNT:
      return {
        ...state,
        totalaUsersCount: action.totalUsers,
      };
    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGLE_FOLOWING_PROGRESS:
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export let followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export let unFollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export let setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export let setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export let setUsersCount = (totalUsers) => {
  return {
    type: SET_USERS_COUNT,
    totalUsers,
  };
};
export let setIsFetching = (isFetching) => {
  return {
    type: TOGLE_IS_FETCHING,
    isFetching,
  };
};

export let setfollowingInProgres = (isFetching, userId) => {
  return {
    type: TOGLE_FOLOWING_PROGRESS,
    isFetching,
    userId,
  };
};


export const setUserThunkCreator = (currentPage, pageSize) => async (
  dispatch
) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let response = await userAPI.getUser(currentPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersCount(response.totalCount));
};

export const followThunkCreator = (userId) => async (dispatch) => {
  dispatch(setfollowingInProgres(true, userId));
  let response = await userAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(setfollowingInProgres(false, userId));
};
export const unFollowThunkCreator = (userId) => async (dispatch) => {
  dispatch(setfollowingInProgres(true, userId));
  let response = await userAPI.unFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unFollowSuccess(userId));
  }
  dispatch(setfollowingInProgres(false, userId));
};
export default UserReducer;
