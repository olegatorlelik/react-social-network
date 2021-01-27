import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialog.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${classes.box__dialogs_item}`}>
      <NavLink
        to={"/dialogs/" + props.id}
        activeClassName={classes.box__dialogs_item_active}
        className={classes.box__dialogs_item}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
