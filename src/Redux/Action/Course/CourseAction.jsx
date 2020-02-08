import reduxAction from '../action';

import CourseService from "../../../Services/courseService";
import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSE_BY_ID, FETCH_LIST_CATEGORY, FETCH_COURSE_SEARCH, SEARCH_COURSE, SEARCH_NOT_FOUND } from "../type";
import { settings } from '../../../Config/settings';


const courseService = new CourseService()
// Async Action Course

export const fetchCourse = () => {
    return dispatch => {
      courseService
      .fetchCourses()
      .then(res => {
        localStorage.setItem(settings.fetchCourse, JSON.stringify(res.data))
        dispatch(reduxAction(FETCH_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  export const searchCourse = (text) => {
    return dispatch => {
      dispatch(reduxAction(SEARCH_COURSE, text))
    }
  }

  export const fetchCourseSearch = (keyword) => {
    return dispatch => {
      courseService
      .fetchCourseSearch(keyword)
      .then(res => {
        localStorage.setItem(settings.fetchCourseSearch, JSON.stringify(res.data))
        dispatch(reduxAction(FETCH_COURSE_SEARCH, res.data));
      })
      .catch(err => { 
        dispatch(reduxAction(SEARCH_NOT_FOUND, err.response.data))
        console.log(err.response.data);
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
          localStorage.setItem(settings.courseStoring, JSON.stringify(res.data));
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
          localStorage.setItem(settings.fetchListCategory, JSON.stringify(res.data))
          dispatch(reduxAction(FETCH_LIST_CATEGORY, res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  };


  
  