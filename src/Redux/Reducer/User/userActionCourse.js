import { USER_ADD_COURSE } from "../../Action/type";

let initialState = {
  // userDetail: {},
  courseArr: [],
};

const UserActionReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case USER_ADD_COURSE: {
      state.courseArr = payload;
      return {...state}
    }

    default:
      return state;
  }
};

export default UserActionReducer;
