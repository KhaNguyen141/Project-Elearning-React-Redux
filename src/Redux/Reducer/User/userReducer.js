import { LOGIN, UPDATE_USER, USER_ADD_COURSE, USER_CANCEL_COURSE, USER_CHECK_COURSE, USER_CHECK_COURSE_APPROVED } from "../../Action/type";

let initialState = {
  credentials: "",
  profileUpdate: [],
  userAddCourse: [],
  userCancelCourse: [],
  userCheckCourse: [],
  userCheckCourseAccepted: [],

};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
        state.credentials = action.payload;
        return {...state};
    }

    case UPDATE_USER: {
      state.profileUpdate = action.payload;
      return {...state};
    }

    case USER_ADD_COURSE: {
      state.userAddCourse = action.payload;
      return {...state};
    }

    case USER_CANCEL_COURSE: {
      state.userCancelCourse = action.payload;
      return {...state}

    }

    case USER_CHECK_COURSE: {
      state.userCheckCourse = action.payload;
      return {...state};
    }

    case USER_CHECK_COURSE_APPROVED: {
      state.userCheckCourseAccepted = action.payload;
      return {...state};
    }
    
    default:
      return state;
  }
};

export default UserReducer;
