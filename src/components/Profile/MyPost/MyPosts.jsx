import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import { Field, reduxForm } from "redux-form";
import {
  requredField,
  maxLengthCreator,
} from "../../Util/validators/validators";
import { TextArea } from "../../Comand/FormsControls";
const MyPosts = React.memo((props) => {
  const onAddPost = (value) => {
    props.addPost(value.addNewPost);
  };
  return (
    <div className={classes.wrapper}>
      <div></div>
      <div className={classes.discription}>
        <WrapperAddNewPostForm onSubmit={onAddPost} />
        <h3 className={classes.titlePosts}>Посты</h3>
        {props.posts.posts.map((elem) => {
          return (
            <div key={elem.id} className={classes.item}>
              <Post message={elem.message} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

const validLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.global}>
        <Field
          name={"addNewPost"}
          component={TextArea}
          validate={[requredField, validLength10]}
          placeholder="Введите текст поста"
        />
        <button className={classes.addPost}>Add new post</button>
      </div>
    </form>
  );
};
const WrapperAddNewPostForm = reduxForm({
  form: "ProfileAddNewPost",
})(addNewPostForm);
export default MyPosts;
