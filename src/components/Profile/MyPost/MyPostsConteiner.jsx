import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { addPostActionCreater } from "../../redux/profileReducer";
import { compose } from "redux";

import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (value) => {
      dispatch(addPostActionCreater(value));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(MyPosts);
