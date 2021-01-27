import profileReducer, {
  addPostActionCreater,
  deletPost,
} from "./profileReducer";
let state = {
  posts: [
    { id: 1, message: "Hi, how are yoo" },
    { id: 2, message: "Go React" },
    { id: 3, message: "Message" },
    { id: 4, message: "You like my" },
  ],
};
it("new Post should be added", () => {
  let action = addPostActionCreater("it-lamasutra");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

it("message jf new postshould be correct", () => {
  let action = addPostActionCreater("it-lamasutra");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("it-lamasutra");
});

it("after deleting of message should be decrement ", () => {
  let action = deletPost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});
