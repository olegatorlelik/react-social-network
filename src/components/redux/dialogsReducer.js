import React from "react";

let initialState = {
  message: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Иди давай учись" },
    { id: 3, message: "Хватит смотреть сериалы, давай за React " },
    { id: 4, message: "Не ты посмотри а..." },
  ],
  dialog: [
    { id: 1, name: "Петя", likeCount: 11 },
    { id: 2, name: "Вася", likeCount: 11 },
    { id: 3, name: "Даша", likeCount: 11 },
    { id: 4, name: "Маша", likeCount: 11 },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return (state = {
        ...state,
        message: [...state.message, { id: 6, message: action.message }],
      });

    default:
      return state;
  }
};

export let sendMessageCreator = (message) => {
  return {
    type: "SEND_MESSAGE",
    message,
  };
};

export default dialogsReducer;
