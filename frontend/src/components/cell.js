import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCellRow,
  getCellCol,
  getSolutionFromGrid,
  isGiven
} from "../utils/gridUtils";
import { validate, getPossibleSolutions } from "../actions";

export function Cell({ subgridNumber, cellNumber }) {
  const root = useSelector(state => state.root);
  const dispatch = useDispatch();
  const row = getCellRow(root, subgridNumber, cellNumber);
  const col = getCellCol(root, subgridNumber, cellNumber);
  const userSolution = useSelector(state =>
    getSolutionFromGrid(state.grid, row, col)
  );
  const possibleSolution = useSelector(state => getSolutionFromGrid(state.possibleSolutions, row, col));
  let solution = userSolution
  if (userSolution === "" && possibleSolution.length<=4 && possibleSolution.length>=1)
    solution = possibleSolution.substr(0 , 4)
  const grid = useSelector(state => state.grid);

  let textColor = "#282c34";
  let isReadOnly = false;
  if (useSelector(state => isGiven(state.grid, row, col))) {
    textColor = "#da1212";
    isReadOnly = true;
  }
  let backgroundColor;
  if (
    useSelector(state => state.invalidityDetails).find(
      (element, index, array) => {
        return element.row === row && element.col === col;
      }
    ) === undefined
  )
    backgroundColor = "#81b71a";
  else backgroundColor = "#E9573F";

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
          dispatch({
            type: "TOGGLE_INITIAL",
            cellRow: row,
            cellCol: col
          })
        }
        onChange={data => {
          dispatch({
            type: "UPDATE_CELL_SOLUTION",
            solution: data.target.value,
            cellRow: row,
            cellCol: col
          });
          validate(dispatch, grid);
          getPossibleSolutions(dispatch, grid)
          
        }}
      ></textarea>
    </div>
  );
}
