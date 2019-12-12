import { FETCH_LIST_CATEGORY } from "../../Action/type";

let initialState = [];

const CourseCategorysReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LIST_CATEGORY: {
      return payload
    }
    default:
      return state;
  }
};
export default CourseCategorysReducer;
