import { historyReducer } from "./historyReducer";
import { hit } from "./scoreReducer";

// Rename this from xdescribe to describe in order to activate the test
xdescribe("history reducer", () => {
  it("should initialize itself with an empty history", () => {
    expect(historyReducer(undefined, {})).toEqual({
      hits: [],
    });
  });

  it("should remember the first hit", () => {
    let state = historyReducer(undefined, {});
    state = historyReducer(state, hit("red"));
    expect(state).toEqual({
      hits: ["red"],
    });
  });

  it("should remember the second hit, too", () => {
    let state = historyReducer(undefined, {});
    state = historyReducer(state, hit("red"));
    state = historyReducer(state, hit("blue"));
    expect(state).toEqual({
      hits: ["red", "blue"],
    });
  });

  it("should remember two hits from the same team", () => {
    let state = historyReducer(undefined, {});
    state = historyReducer(state, hit("red"));
    state = historyReducer(state, hit("red"));
    expect(state).toEqual({
      hits: ["red", "red"],
    });
  });
});
