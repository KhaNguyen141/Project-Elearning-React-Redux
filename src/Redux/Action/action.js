import { FETCH_COURSE_DETAIL, FETCH_COURSES } from "./type";
import CourseService from "../../Services/courseService";

const courseService = new CourseService();

//action creator
const reduxAction = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

//async action
export const fetchCourseDetail = (courseid) => {
  return dispatch => {
    courseService
      .fetchCourseDetail(courseid)
      .then(res => {
        dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchCourses = (maNhom) => {
  return dispatch => {
    courseService
      .fetchCourses(maNhom)
      .then(res => {
        dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default reduxAction;
