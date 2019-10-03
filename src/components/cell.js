import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCellRow,
  getCellCol,
  getSolutionFromGrid,
  isInitial
} from "../utils/gridUtils";

export function Cell({ subgridNumber, cellNumber }) {
  const root = useSelector(state => state.root);
  const dispatch = useDispatch();
  const row = getCellRow(root, subgridNumber, cellNumber);
  const col = getCellCol(root, subgridNumber, cellNumber);
  const solution = useSelector(state =>
    getSolutionFromGrid(state.grid, row, col)
  );
  let textColor = "#282c34"
  let isReadOnly = false
  if (useSelector(state => isInitial(state.grid, row, col))) {
    textColor = "#da1212";
    isReadOnly = true
  }
  

  return (
    <div>
      <textarea
        className="cell"
        rows="1"
        cols="4"
        maxLength="4"
        style={{ color: textColor }}
        value={solution}
        readOnly = {isReadOnly}
        data-testid={row + ":" + col}
        onDoubleClick={() =>
          dispatch({
            type: "TOGGLE_INITIAL",
            cellRow: row,
            cellCol: col
          })
        }
        onChange={data =>
          dispatch({
            type: "UPDATE_CELL_SOLUTION",
            solution: data.target.value,
            cellRow: row,
            cellCol: col
          })
        }
      ></textarea>
    </div>
  );
}
