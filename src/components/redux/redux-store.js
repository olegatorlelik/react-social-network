import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import UserReducer from "./UserReducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import newsReducer from "./news-reducer";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reduserc,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
