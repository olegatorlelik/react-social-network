import React from "react";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import {
  sendMessageCreator,
} from "../redux/dialogsReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialog);
