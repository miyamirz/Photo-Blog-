import { fetchUser } from "../user";
import { FETCH_USER } from "../types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = fetchUser();

    expect(action.type).toEqual(FETCH_USER);
  });
});
