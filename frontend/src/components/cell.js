import React from "react";
import { updateCellSolutionAndValidate, toggleInitial } from "../actions";



export function Cell({ row, col, dispatch, userSolution, possibleSolution, isValid, isGiven }) {
  let solution = userSolution
  if (userSolution === "" && possibleSolution.length <= 4 && possibleSolution.length >= 1)
    solution = possibleSolution.substr(0, 4)

  let textColor = "#282c34";
  let isReadOnly = false;
  if (isGiven) {
    textColor = "#da1212";
    isReadOnly = true;
  }
  let backgroundColor;
  if (isValid)
    backgroundColor = "#81b71a";
  else
    backgroundColor = "#E9573F";

  return (
    <div>
      <textarea
        className="cell"
        rows="1"
        cols="4"
        maxLength="4"
        style={{ color: textColor, backgroundColor: backgroundColor }}
        value={solution}
        readOnly={isReadOnly}
        data-testid={row + ":" + col}
        onDoubleClick={() =>
          dispatch(toggleInitial(row, col))
        }
        onChange={data => {
          updateCellSolutionAndValidate(data.target.value, row, col, dispatch)

        }}
      ></textarea>
    </div>
  );
}