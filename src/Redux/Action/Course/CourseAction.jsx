import reduxAction from '../action';
import Swal from 'sweetalert2';

import CourseService from "../../../Services/courseService";
import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSE_CATEGORIES, FETCH_LIST_CATEGORY } from "../type";


const courseService = new CourseService()
// Async Action Course

export const fetchCourse = () => {
    return dispatch => {
      courseService
      .fetchCourses()
      .then(res => {
        dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

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
  