import { Route, withRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import DialogContainer from "./components/Dialogs/DialogConteiner";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Music from "./components/Musik/Music";
import Nav from "./components/Nav/navOne/Nav";
import NewsConteiner from "./components/News/NewsConteiner";
import ProfailContainer from "./components/Profile/ContainerProfail";
import UsersAPIComponent from "./components/Users/UsersConainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "./components/Comand/Loader";
import { initializeApp } from "./components/redux/app-reducer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderConteiner />
        <Nav />
        <div className="app__wrapper_content">
          <Route path="/profile/:userId?" render={() => <ProfailContainer />} />

          <Route path="/dialogs" render={() => <DialogContainer />} />

          <Route path="/users" render={() => <UsersAPIComponent />} />

          <Route path="/login" render={() => <Login />} />

          <Route path="/news" component={NewsConteiner} />

          <Route path="/music" component={Music} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
