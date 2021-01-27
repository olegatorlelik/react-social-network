import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../Comand/FormsControls";
import { sendMessageCreator } from "../redux/dialogsReducer";
import { requredField, maxLengthCreator } from "../Util/validators/validators";
import style from "./Dialog.module.css";

const maxLengthChecked = maxLengthCreator(10);

const FormMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.boxBtnSendMessage}>
      <Field
        placeholder={"inter you message"}
        component={TextArea}
        name={"sendMessage"}
        validate={[requredField, maxLengthChecked]}
      ></Field>
      <button className={style.btnSend}>send Message</button>
    </form>
  );
};

const FormReduxMessage = reduxForm({
  form: "sendMessage",
})(FormMessage);

const WrapperSendMessage = (props) => {
  const onSubmit = (formData) => {
    props.sendMessageCreator(formData.sendMessage);
    console.log(formData);
  };
  return (
    <div>
      <FormReduxMessage onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { sendMessageCreator })(
  WrapperSendMessage
);
