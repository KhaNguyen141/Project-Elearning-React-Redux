import { LOGIN, CHECK_PROFILE } from "../../Action/type";

let initialState = {
  userProfile: [],
  // userDetail: {},
  credentials: null
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
        state.credentials = payload;
        return {...state}
    }

    default:
      return state;
  }
};

export default UserReducer;
