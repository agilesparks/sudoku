import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCellRow, getCellCol, getDigitFromGrid } from "../utils/matrixUtils";




export function Cell({ subgridNumber, cellNumber }) {
  const root = useSelector(state => state.root);
  const dispatch = useDispatch();
  const row = getCellRow(root, subgridNumber, cellNumber);
  const col = getCellCol(root, subgridNumber, cellNumber);
  const digit = useSelector(state => getDigitFromGrid(state.grid, row, col));

  return (
    <div >
      <textarea
        className="cell"
        rows="1"
        cols="4"
        value={digit}
        data-testid={row + ":" + col}
        onChange={data =>
          dispatch({
            type: "UPDATE_CELL_DIGIT",
            digit: data.target.value,
            cellRow: row,
            cellCol: col
          })
        }
      ></textarea>
    </div>
  );
}
