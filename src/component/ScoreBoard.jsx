import React from "react";
import { useSelector } from "react-redux";

export const ScoreBoard = () => {
  const score = useSelector((state) => state.score.score);
  const servingTeam = useSelector((state) => state.score.servingTeam);

  return (
    <div className="scoreboard">
      <div className="scoreboard__container">
        <div className="scoreboard__teams">
          <div className="scoreboard__team scoreboard__team--align-right mr-2">
            <div
              className="scoreboard__badge ml-1"
              style={{ background: "#00D4FF" }}
            />
            <div className="scoreboard__badge ml-1"></div>
            <span className="scoreboard__name">
              Team Blue{servingTeam === "blue" ? "!" : ""}
            </span>
          </div>
          <div className="scoreboard__result">
            <span className="scoreboard__result-home">{score.blue}</span>
            <span className="scoreboard__result-separator">:</span>
            <span className="scoreboard__result-home">{score.red}</span>
          </div>
          <div className="scoreboard__team scoreboard__team--align-left ml-2">
            <div
              className="scoreboard__badge mr-1"
              style={{ background: "#FE53BB" }}
            />
            <span className="scoreboard__name">
              Team Red{servingTeam === "red" ? "!" : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
