import React from "react";
import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import WrapperSendMessage from "./SendMessage";

const Dialog = (props) => {
  return (
    <div>
      <div className={classes.box}>
        <div className={classes.box__dialogs}>
          {props.profilePage.dialog.map((item) => {
            return <DialogItem name={item.name} id={item.id} />;
          })}
        </div>

        <div className={classes.box__messages}>
          <div>
            {props.profilePage.message.map((item) => {
              return <Message message={item.message} id={item.id} />;
            })}
          </div>
        </div>
      </div>
      <WrapperSendMessage />
    </div>
  );
};

export default Dialog;
