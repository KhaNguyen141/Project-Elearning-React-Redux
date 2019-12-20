import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_LIST_CATEGORY, FETCH_COURSE_BY_ID, COURSE_SEARCH_ACTION} from "../../Action/type";

let initialState = {
  courses: [],
  detail: [],
  courseListCategory: [],
  courseByID: [],
  value: '',
  courseSearch: [],

};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES: {
      
      return {
        ...state,
        courses: action.payload
      }
    }

    case FETCH_COURSE_DETAIL: {
      state.detail = action.payload
      return {...state};
    }

    case FETCH_LIST_CATEGORY: {
      state.courseListCategory = action.payload;
      return {...state};
    }

    case FETCH_COURSE_BY_ID: {
      state.courseByID = action.payload;
      return {...state};
     
    }

    case COURSE_SEARCH_ACTION: {
        return {
          ...state,
          courseSearch: action.payload
        }
    }
    default:
      return state;
  }
};

export default CourseReducer;
