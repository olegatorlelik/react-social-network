import React from "react";
import { connect } from "react-redux";
import {
  unFollowThunkCreator,
  followThunkCreator,
  setUserThunkCreator,
} from "../redux/UserReducer";
import {
  getUserSuperSelector,
  getPageSize,
  getTotalaUsersCount,
  getCurentPage,
  getIsFetching,
  getFollowingInProgres,
} from "../redux/userSelectors";

import Loader from "../Comand/Loader";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import Users from "./Users";
class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.setUserThunkCreator(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.setUserThunkCreator(pageNumber, pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            users={this.props.users}
            totalaUsersCount={this.props.totalaUsersCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            follow={this.props.followThunkCreator}
            unFollow={this.props.unFollowThunkCreator}
            valueInProgress={this.props.valueInProgress}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    pageSize: getPageSize(state),
    totalaUsersCount: getTotalaUsersCount(state),
    currentPage: getCurentPage(state),
    isFetching: getIsFetching(state),
    valueInProgress: getFollowingInProgres(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    unFollowThunkCreator,
    followThunkCreator,
    setUserThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);
