import React from "react";
import styled from "styled-components";

export const TeamButton = styled.button`
  border: 3px solid;
  color: ${({ team }) => (team === "red" ? "#FE53BB" : "#00D4FF")};
  background-color: ${({ team }) => (team === "red" ? "#840151" : "#002a33")};
  border-color: ${({ team }) => (team === "red" ? "#FE53BB" : "#00D4FF")};

  border-radius: 12px;
  padding: 16px 16px;
  outline: 0;
  font-weight: 800;
  min-width: 100px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 15px;
  display: inline-block;
  padding: 10px 16px;
  margin: 0 3px 0 0;
  cursor: pointer;
`;

export const Button2 = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
