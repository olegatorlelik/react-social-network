import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getUsersSelector = (state) => {
  return getUsers(state).filter((u) => true);
};

export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});


export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalaUsersCount = (state) => {
  return state.usersPage.totalaUsersCount;
};

export const getCurentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgres = (state) => {
  return state.usersPage.followingInProgres;
};
