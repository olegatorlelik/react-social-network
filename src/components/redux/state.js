import React from "react";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    dialogsData: [
      { id: 1, name: "Oleg", likeCount: 11 },
      { id: 2, name: "Ann", likeCount: 11 },
      { id: 3, name: "Work", likeCount: 11 },
      { id: 4, name: "Bitch", likeCount: 11 },
    ],
    arrMessage: [
      { id: 1, message: "you are cool" },
      { id: 2, message: "you like my" },
      { id: 3, message: "big boots" },
      { id: 4, message: "hi" },
    ],

    posts: [
      { id: 1, message: "Hi, how are yoo" },
      { id: 2, message: "Go React" },
      { id: 3, message: "Message" },
      { id: 4, message: "You like my" },
    ],
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcribe = observer;
  },

  _callSubcribe() {
    console.log("test");
  },
  _addPost() {
    this._state.posts.push({
      id: 5,
      message: this._state.newPostText,
      likeCount: 12,
    });
    this._callSubcribe(this._state);
  },
  _updatePost(newText) {
    this._state.newPostText = newText;
    this._callSubcribe(this._state);
  },
  dispatch(action) {
    this._state.arrMessage = dialogsReducer(this._state.arrMessage, action);
    this._state.posts = profileReducer(this._state.posts, action);

    this._callSubcribe(this._state);
  },
};

export default store;
