import { combineReducers } from "redux";

//Course
import CourseReducer from "./Course/courseReducer";
import CourseDetailReducer from "./Course/courseDetailReducer";

// User
import UserReducer from "./User/userReducer";

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  courseDetail: CourseDetailReducer,
  user: UserReducer
});

export default RootReducer;
