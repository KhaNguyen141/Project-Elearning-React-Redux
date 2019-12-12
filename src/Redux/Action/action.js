import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSE_CATEGORIES, FETCH_LIST_CATEGORY } from "./type";
import CourseService from "../../Services/courseService";

const courseService = new CourseService();

//action creator
const reduxAction = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

export default reduxAction;
