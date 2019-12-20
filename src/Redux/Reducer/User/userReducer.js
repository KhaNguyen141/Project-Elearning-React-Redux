import { LOGIN, UPDATE_USER, USER_ADD_COURSE, USER_CANCEL_COURSE, USER_CHECK_COURSE } from "../../Action/type";
import { settings } from "../../../Config/settings";

let initialState = {
  credentials: "",
  profileUpdate: [],
  userAddCourse: [],
  userCancelCourse: [],
  userCheckCourse: [],

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
      console.log(action)
      return {...state};
    }

    case USER_CANCEL_COURSE: {
      console.log(action)
      return {...state};
    }

    case USER_CHECK_COURSE: {
      state.userCheckCourse = [JSON.parse(localStorage.getItem("courseSignedUp"))];
      return {...state};
    }
    
    default:
      return state;
  }
};

export default UserReducer;
