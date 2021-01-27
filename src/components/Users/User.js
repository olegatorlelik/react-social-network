import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "./Pagenator";
import { arrImg } from "../Util/Constans/Constans";
import { arrCity } from "../Util/Constans/Constans";
const User = (props) => {
  return (
    <div>
      <div className={classes.wrapperContent}>
        <Paginator
          totalaUsersCount={props.totalaUsersCount}
          pageSize={props.pageSize}
          onPageChange={props.onPageChange}
          currentPage={props.currentPage}
        />
        <div className={classes.wrapperUser}>
          {props.users.map((elem, index) => {
            return (
              <div key={index} className={classes.userConteiner}>
                <span>
                  <div>
                    <NavLink to={`/profile/${elem.id}`}>
                      <img
                        src={arrImg[Math.round(Math.random() * (10 - 0) + 0)]}
                        className={classes.photoUser}
                      ></img>
                    </NavLink>
                  </div>
                  <div>
                    {elem.followed ? (
                      <button
                        className={
                          props.valueInProgress.some((id) => id === elem.id)
                            ? classes.disable
                            : classes.btnFolowing
                        }
                        onClick={() => {
                          props.unFollow(elem.id);
                        }}
                      >
                        FOLLOW
                      </button>
                    ) : (
                      <button
                        className={
                          props.valueInProgress.some((id) => id === elem.id)
                            ? classes.disable
                            : classes.btnFolowing
                        }
                        onClick={() => {
                          props.follow(elem.id);
                        }}
                      >
                        UNFOLLOW
                      </button>
                    )}
                  </div>
                </span>
                <span>
                  <div className={classes.userDiscription}>Имя:{elem.name}</div>
                  <div>{elem.status}</div>
                </span>
                <span>
                  <div className={classes.userDiscription}>
                    {" "}
                    Город: {arrCity[Math.round(Math.random() * (10 - 0) + 0)]}
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default User;
