import React from "react";
import { useSelector, useDispatch } from "react-redux";

var getCellRow = function(subgridNumber, cellNumber) {
  return Math.floor(subgridNumber / 2) * 2 + Math.floor(cellNumber / 2);
};

var getCellCol = function(subgridNumber, cellNumber) {
  return (subgridNumber % 2) * 2 + (cellNumber % 2);
};

export function Cell({ subgridNumber, cellNumber }) {
  const dispatch = useDispatch();
  const row = getCellRow(subgridNumber, cellNumber);
  const col = getCellCol(subgridNumber, cellNumber);
  const digit = useSelector(state => state.grid[row][col]);

  return (
    <td
      className="cell"
      style={{
        width: 50,
        height: 50
      }}
    >
      <textarea
        rows="1"
        cols="1"
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
    </td>
  );
}
