import { combineReducers } from "redux";

//Course
import CourseReducer from "./Course/courseReducer";
import CourseDetailReducer from "./Course/courseDetailReducer";

// User
import UserReducer from "./User/userReducer";
import CourseCategorysReducer from "./Course/CourseCategoriesReducer";
import UserActionReducer from "./User/userActionCourse";

const RootReducer = combineReducers({
  //toàn bộ state
  courseList: CourseReducer,
  courseDetail: CourseDetailReducer,
  courseCategory: CourseCategorysReducer,
  user: UserReducer,
  userAction: UserActionReducer
});

export default RootReducer;
