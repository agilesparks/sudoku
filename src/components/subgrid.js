import React from "react";
import { CellContainer }  from "./cellContainer";

export function Subgrid(props) {
  return (
    <td className="subgrid">
      <table>
      <tbody>
        <tr>
          <CellContainer subgridNumber={props.subgridNumber} cellNumber={0} />
          <CellContainer subgridNumber={props.subgridNumber} cellNumber={1} />
        </tr>
        <tr>
          <CellContainer subgridNumber={props.subgridNumber} cellNumber={2} />
          <CellContainer subgridNumber={props.subgridNumber} cellNumber={3} />
        </tr>
        </tbody>
        </table>
    </td>
  );
}
