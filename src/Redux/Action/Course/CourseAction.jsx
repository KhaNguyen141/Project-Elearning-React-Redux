import reduxAction from '../action';
import Swal from 'sweetalert2';

import CourseService from "../../../Services/courseService";
import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSE_BY_ID, FETCH_LIST_CATEGORY, FETCH_COURSE_PENDING } from "../type";
import { settings } from '../../../Config/settings';


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
          localStorage.setItem(settings.courseDetail, JSON.stringify(res.data))
          dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  
  export const fetchCoursesByID = (maDanhMuc) => {
    return dispatch => {
      courseService
        .fetchCoursesByID(maDanhMuc)
        .then(res => {
          localStorage.setItem(settings.courseStoring, JSON.stringify(res.data))
          dispatch(reduxAction(FETCH_COURSE_BY_ID, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };
  
  export const fetchListCategory = () => {
    return dispatch => {
      courseService
        .fetchListCategory()
        .then(res => {
          dispatch(reduxAction(FETCH_LIST_CATEGORY, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  export const fetchCoursePending = (coursePending) => {
    return dispatch => {
      courseService
        .fetchCoursePending(coursePending)
        .then(res => {
            localStorage.setItem(settings.coursePending, JSON.stringify(res.data));
          
            dispatch(reduxAction(FETCH_COURSE_PENDING, res.data));
          
        })
        .catch(err => {
          console.log(err);
        });
    };
  };

  
  