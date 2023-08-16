import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
import homeReducer from "./reducers/home";
import examReducer from "./reducers/exam";
import timeTableReducer from "./reducers/timeTable";
import calendarEventReducer from "./reducers/calendarEvent";
import upComingExamDetailReducer from "./reducers/upComingExamDetail";
import completedExamDetailReducer from "./reducers/completedExamDetail";
import profileReducer from "./reducers/profile";
import homeworkReducer from "./reducers/homework";
import paymentHistoryReducer from "./reducers/paymentHistory";
import billingHistoryReducer from "./reducers/billingHistory";
import attendanceReducer from "./reducers/attendance";
import paymentDetailReducer from "./reducers/paymentDetail";
import notificationReducer from "./reducers/notification";
import baseUrlReducer from "./reducers/baseUrl";
import sendMessageReducer from "./reducers/sendMessage";
import activityReducer from "./reducers/activity";


const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  exam: examReducer,
  titleTable: timeTableReducer,
  calendarEvent: calendarEventReducer,
  upComingExamDetail: upComingExamDetailReducer,
  completedExamDetail: completedExamDetailReducer,
  profile: profileReducer,
  homework: homeworkReducer,
  paymentHistory: paymentHistoryReducer,
  billingHistory: billingHistoryReducer,
  attendance: attendanceReducer,
  paymentDetail: paymentDetailReducer,
  notification: notificationReducer,
  baseURL: baseUrlReducer,
  sendMessage: sendMessageReducer,
  activity: activityReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
