import React from "react";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <AppBar>
      <Toolbar>
        <nav className={classes.nav}>
          <div>
            <NavLink
              to="/profile/"
              activeClassName={classes.active}
              className={classes.item}
            >
              Профиль
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/dialogs"
              activeClassName={classes.active}
              className={classes.item}
            >
              Диалоги
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/users"
              activeClassName={classes.active}
              className={classes.item}
            >
              Контакты
            </NavLink>
          </div>

          <div>
            <NavLink
              activeClassName={classes.active}
              to="/news"
              className={classes.item}
            >
              Погода
            </NavLink>
          </div>

          <div>
            <NavLink
              activeClassName={classes.active}
              to="/music"
              className={classes.item}
            >
              Music
            </NavLink>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
