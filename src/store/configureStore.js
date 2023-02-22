import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import homeReducer from "./reducers/home";
import examReducer from "./reducers/exam";
import timeTableReducer from "./reducers/timeTable";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  exam: examReducer,
  titleTable: timeTableReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
