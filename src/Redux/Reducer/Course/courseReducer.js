import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_LIST_CATEGORY, FETCH_COURSE_BY_ID } from "../../Action/type";

let initialState = {
  courses: [],
  detail: [],
  courseListCategory: [],

  category: [
    {
      "maDanhMuc": "BackEnd",
      "tenDanhMuc": "Lập trình Backend"
    },
    {
      "maDanhMuc": "Design",
      "tenDanhMuc": "Thiết kế Web"
    },
    {
      "maDanhMuc": "DiDong",
      "tenDanhMuc": "Lập trình di động"
    },
    {
      "maDanhMuc": "FrontEnd",
      "tenDanhMuc": "Lập trình Front end"
    },
    {
      "maDanhMuc": "FullStack",
      "tenDanhMuc": "Lập trình Full Stack"
    },
    {
      "maDanhMuc": "TuDuy",
      "tenDanhMuc": "Tư duy lập trình"
    }
  ],

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
      state.courses = payload;
      return {...state};
    }

    default:
      return state;
  }
};
export default CourseReducer;
