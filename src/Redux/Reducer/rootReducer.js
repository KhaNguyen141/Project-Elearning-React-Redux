import { combineReducers } from "redux";

//Course
import CourseReducer from "./Course/courseReducer";

// User
import UserReducer from "./User/userReducer";

const RootReducer = combineReducers({
  //toàn bộ state
  courseReducer: CourseReducer,
  UserReducer: UserReducer,
});

export default RootReducer;
