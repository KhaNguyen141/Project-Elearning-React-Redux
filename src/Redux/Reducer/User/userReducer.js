import { LOGIN, UPDATE_USER } from "../../Action/type";

let initialState = {
  // userDetail: {},
  credentials: null
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

    default:
      return state;
  }
};

export default UserReducer;
