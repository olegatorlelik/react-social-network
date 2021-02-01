import React from "react";
import classes from "./Users.module.css";
import Paginator from "./Pagenator";
import User from "./User";

const Users = (props) => {
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
              <User
                key={index}
                items={elem}
                followed={elem.followed}
                valueInProgress={props.valueInProgress}
                unFollow={props.unFollow}
                follow={props.follow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Users;
