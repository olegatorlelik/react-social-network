import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import classes from "../../style.module.css";
const Header = (props) => {
  return (
    <header className={classes.headers}>
      <div className={classes.header__logo}>
        <span className={classes.header__logo_border}>IT</span>
        <span className={classes.header__logo_item}>
          inkubator social-network
        </span>
      </div>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div className={classes.box_logo}>
            <span className={classes.id}>{props.id}</span>
            <div>
              <IconButton onClick={props.logout}>Выйти</IconButton>
            </div>
          </div>
        ) : (
          <IconButton>
            <NavLink to="/login" className={classes.link}>
              Вход
            </NavLink>
          </IconButton>
        )}
      </div>
    </header>
  );
};
export default Header;
