import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import homeReducer from "./reducers/home";
import examReducer from "./reducers/exam";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  exam: examReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
