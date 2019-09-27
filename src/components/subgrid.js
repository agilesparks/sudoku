import React from "react";
import { Cell }  from "./cell";

export function Subgrid(props) {
  return (
    <td className="subgrid">
      <table>
      <tbody>
        <tr>
          <Cell subgridNumber={props.subgridNumber} cellNumber={0} />
          <Cell subgridNumber={props.subgridNumber} cellNumber={1} />
        </tr>
        <tr>
          <Cell subgridNumber={props.subgridNumber} cellNumber={2} />
          <Cell subgridNumber={props.subgridNumber} cellNumber={3} />
        </tr>
        </tbody>
        </table>
    </td>
  );
}
