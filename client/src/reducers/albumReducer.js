import { FETCH_ALBUMS } from "../actions/types";
export const albumReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return [...action.payload];
    default:
      return state;
  }
};
