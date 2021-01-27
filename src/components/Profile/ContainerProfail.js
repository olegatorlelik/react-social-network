import React from "react";
import Profail from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfail,
  getUserStatus,
  updateUserStatus,
} from "../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";

class ProfailContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.auroraizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfail(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <Profail
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        auroraizedUserId={this.props.AuroraizedUserId}
        isFetch={this.props.isFetch}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.posts.profile,
    status: state.posts.status,
    auroraizedUserId: state.auth.userId,
    isFetch: state.auth.isFetch,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfail, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfailContainer);
