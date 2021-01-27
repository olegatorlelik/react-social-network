import React from "react";
import classes from "./Post.module.css";
import { arrImg } from "../../../Util/Constans/Constans";
const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src={arrImg[Math.round(Math.random() * (10 - 0) + 0)]} />
        <span className={classes.messag}>{props.message}</span>
      </div>
    </div>
  );
};
export default Post;
