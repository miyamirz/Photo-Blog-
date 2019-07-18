import { FETCH_PHOTOS } from "../actions/types";
export const photosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return [...action.payload];
    default:
      return state;
  }
};
