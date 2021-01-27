import React from "react";
import style from "../Comand/FormControl.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Comand/FormsControls";
import { requredField, maxLengthCreator } from "../Util/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const maxLengthChecked = maxLengthCreator(30);

const Login = (props) => {
  return (
    <div className={style.postcard}>
      <form onSubmit={props.handleSubmit}>
        <div className={style.formRow}>
          <Field
            name={"email"}
            placeholder="Login"
            component={Input}
            validate={[requredField, maxLengthChecked]}
          />
        </div>
        <div>
          <Field
            name={"password"}
            placeholder="Pasword"
            component={Input}
            validate={[requredField, maxLengthChecked]}
            type={"password"}
          />
        </div>
        <div>
          <Field type={"checkbox"} component={"input"} name={"rememberMe"} />
        </div>
        <div>
          {props.error && (
            <div className={style.errorSomery}>{props.error}</div>
          )}
          <button> Login </button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(Login);

const PageLogin = (props) => {
  const onSubmit = ({ email, password, rememberMe }) => {
    props.login(email, password, rememberMe);
  };
  if (!props.isAuth) {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Регистрация</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  }
  return <Redirect to={"/profile"} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isFetch,
  };
};

export default connect(mapStateToProps, { login, logout })(PageLogin);
