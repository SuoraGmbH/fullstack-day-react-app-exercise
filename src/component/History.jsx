import { useSelector } from "react-redux";
import React from "react";

export const History = () => {
  // @TODO Adjust the next line to read the data from redux
  const history = [];

  return (
    <div>
      {history.map((hit, index) => {
        return <div key={index}>{hit}</div>;
      })}
    </div>
  );
};
