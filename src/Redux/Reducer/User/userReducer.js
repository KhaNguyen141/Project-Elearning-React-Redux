import { LOGIN, UPDATE_USER, USER_ADD_COURSE, FETCH_COURSE_PENDING } from "../../Action/type";

let initialState = {
  credentials: null,
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
        state.credentials = payload;
        return {...state}
    }

    case UPDATE_USER: {
      state.credentials = payload;
      return {...state}
    }

    case USER_ADD_COURSE: {
      state.credentials = payload;
      return {...state}
    }
    
    default:
      return state;
  }
};

export default UserReducer;
