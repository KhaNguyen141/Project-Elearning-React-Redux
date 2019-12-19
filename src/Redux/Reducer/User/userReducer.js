import { LOGIN, UPDATE_USER, USER_ADD_COURSE, USER_CANCEL_COURSE, USER_CHECK_COURSE } from "../../Action/type";
import { settings } from "../../../Config/settings";

let initialState = {
  credentials: "",
  profileUpdate: [],
  userAddCourse: [],
  userCancelCourse: [],
  userCheckCourse: [
    JSON.parse(localStorage.getItem("courseSignedUp"))
  ],

};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
        state.credentials = payload;
        return {...state};
    }

    case UPDATE_USER: {
      state.profileUpdate = payload;
      return {...state};
    }

    case USER_ADD_COURSE: {
      state.userAddCourse = payload;
      return {...state};
    }

    case USER_CANCEL_COURSE: {
      state.userCancelCourse = payload;
      return {...state};
    }

    case USER_CHECK_COURSE: {
      state.userCheckCourse = state.userCheckCourse;
      return {...state};
    }
    
    default:
      return state;
  }
};

export default UserReducer;
