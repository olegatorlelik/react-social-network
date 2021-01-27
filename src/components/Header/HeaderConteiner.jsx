import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../redux/auth-reducer";
import { logout } from "../redux/auth-reducer";

class HeaderConteiner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isFetch,
    login: state.auth.login,
    id: state.auth.userId,
  };
};
export default connect(mapStateToProps, { logout })(HeaderConteiner);
