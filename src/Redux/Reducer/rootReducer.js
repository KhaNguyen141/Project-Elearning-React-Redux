import { combineReducers } from "redux";

//Course
import CourseReducer from "./Course/courseReducer";

// User
import UserReducer from "./User/userReducer";

const RootReducer = combineReducers({
  //toàn bộ state
  courseReducer: CourseReducer,
  userReducer: UserReducer,
});

export default RootReducer;
