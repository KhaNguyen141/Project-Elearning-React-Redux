import { FETCH_COURSE_DETAIL, FETCH_COURSE_CATEGORIES, FETCH_LIST_CATEGORY } from "./type";
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

export const fetchCourseCategories = (maDanhMuc) => {
  return dispatch => {
    courseService
      .fetchCoursesCategories(maDanhMuc)
      .then(res => {
        dispatch(reduxAction(FETCH_COURSE_CATEGORIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchListCategory = (maDanhMuc) => {
  return dispatch => {
    courseService
      .fetchListCategory(maDanhMuc)
      .then(res => {
        dispatch(reduxAction(FETCH_LIST_CATEGORY, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default reduxAction;
