import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_LIST_CATEGORY, FETCH_COURSE_BY_ID } from "../../Action/type";

let initialState = {
  courses: [],
  detail: [],
  courseListCategory: [],
  courseByID: []

};

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSES: {
      state.courses = payload;
      return {...state}
    }

    case FETCH_COURSE_DETAIL: {
      state.detail = payload
      return {...state};
    }

    case FETCH_LIST_CATEGORY: {
      state.courseListCategory = payload;
      return {...state};
    }

    case FETCH_COURSE_BY_ID: {
      state.courseByID = payload;
      return {...state};
     
    }

    default:
      return state;
  }
};

export default CourseReducer;
