export const user = (state = "", action) => {
  switch (action.payload) {
    case "USER":
      return action.payload;
    default:
      return state;
  }
};
