import React from "react";
import classes from "../Users/Users.module.css"

const Loader = () => {
  return (
    <div className={classes.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader