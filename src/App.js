import { Route, withRouter } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Music from "./components/Musik/Music";
import Nav from "./components/Nav/navOne/Nav";
import NewsConteiner from "./components/News/NewsConteiner";
import UsersAPIComponent from "./components/Users/UsersConainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "./components/Comand/Loader";
import { initializeApp } from "./components/redux/app-reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/redux-store";
import { WithSuspence } from "./components/hoc/withSuspence";
const DialogContainer = React.lazy(() =>
  import("./components/Dialogs/DialogConteiner")
);
const ProfailContainer = React.lazy(() =>
  import("./components/Profile/ContainerProfail")
);

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
          <Route
            path="/profile/:userId?"
            render={WithSuspence(ProfailContainer)}
          />

          <Route
            path="/dialogs"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <DialogContainer />
              </Suspense>
            )}
          />

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

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJsApp;
