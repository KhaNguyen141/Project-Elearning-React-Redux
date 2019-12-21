import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_LIST_CATEGORY, FETCH_COURSE_BY_ID, SEARCH_COURSE, FETCH_COURSE_SEARCH} from "../../Action/type";

let initialState = {
  courses: [],
  detail: [],
  courseListCategory: [],
  courseByID: [],
  text: '',
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
      return {
        ...state,
        courseByID: action.payload
      }
    }

    case SEARCH_COURSE: {
      state.text = action.payload;
      return {...state}
    }

    case FETCH_COURSE_SEARCH: {
      state.courseSearch = action.payload;
      return {...state};
    }
    
    default:
      return state;
  }
};

export default CourseReducer;
