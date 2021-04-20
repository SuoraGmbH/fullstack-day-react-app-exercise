const initialState = {
  servingTeam: "blue",
  score: {
    red: 0,
    blue: 0,
  },
};

export const hit = (team) => {
  return {
    type: "HIT",
    team: team,
  };
};

export const scoreReducer = (state = initialState, action = null) => {
  // @TODO Adjust the reducer, so that only the serving team can score a point!
  if (action.type === "HIT") {
    return {
      ...state,
      servingTeam: action.team,
      score: {
        ...state.score,
        [action.team]: state.score[action.team] + 1,
      },
    };
  }

  return state;
};
