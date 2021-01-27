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
import User from "./User";
import Loader from "../Comand/Loader";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setUserThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.setUserThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <User
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
