import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isFetch,
  };
};

export const withAuthRedirect = (Components) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />;
      }

      return <Components {...this.props} />;
    }
  }
  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedRedirectComponent;
};
