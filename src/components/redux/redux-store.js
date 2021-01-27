import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UserReducer from "./UserReducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import newsReducer from "./news-reducer"
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reduserc = combineReducers({
  profilePage: dialogsReducer,
  posts: profileReducer,
  usersPage: UserReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  weather: newsReducer,
});
let store = createStore(reduserc, applyMiddleware(thunkMiddleware));

export default store;
