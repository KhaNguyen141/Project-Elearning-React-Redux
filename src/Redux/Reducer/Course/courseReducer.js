import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_LIST_CATEGORY, FETCH_COURSE_BY_ID, COURSE_SEARCH_ACTION} from "../../Action/type";

let initialState = {
  courses: [],
  detail: [],
  courseListCategory: [],
  courseByID: [],
  value: '',
  courseSearch: [],

};

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSES: {
      
      return {
        ...state,
        courses: payload
      }
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

    case COURSE_SEARCH_ACTION: {
        return {
          ...state,
          courseSearch: payload
        }
    }
    default:
      return state;
  }
};

export default CourseReducer;
