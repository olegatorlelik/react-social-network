import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { arrImg } from "../Util/Constans/Constans";
import { arrCity } from "../Util/Constans/Constans";
const User = ({ items, followed, valueInProgress, unFollow, follow }) => {
  return (
    <div className={classes.userConteiner}>
      <span>
        <div>
          <NavLink to={`/profile/${items.id}`}>
            <img
              src={arrImg[Math.round(Math.random() * (10 - 0) + 0)]}
              className={classes.photoUser}
            ></img>
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              className={
                valueInProgress.some((id) => id === items.id)
                  ? classes.disable
                  : classes.btnFolowing
              }
              onClick={() => {
                unFollow(items.id);
              }}
            >
              FOLLOW
            </button>
          ) : (
            <button
              className={
                valueInProgress.some((id) => id === items.id)
                  ? classes.disable
                  : classes.btnFolowing
              }
              onClick={() => {
                follow(items.id);
              }}
            >
              UNFOLLOW
            </button>
          )}
        </div>
      </span>
      <span>
        <div className={classes.userDiscription}>Имя:{items.name}</div>
        <div>{items.status}</div>
      </span>
      <span>
        <div className={classes.userDiscription}>
          Город: {arrCity[Math.round(Math.random() * (10 - 0) + 0)]}
        </div>
      </span>
    </div>
  );
};
export default User;
