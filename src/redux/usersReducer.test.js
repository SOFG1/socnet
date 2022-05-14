import usersReducer, { followConditionAC } from "./usersReducer.ts";

test("Test following condition toggle", () => {
  // Initial data
  let action = followConditionAC(5);
  let initialState = {
    disabledFollow: [1, 2, 3, 4],
  };
  // testing
  let newState = usersReducer(initialState, action);
  // Result
  expect(newState.disabledFollow.includes(5)).toBe(true)
});
