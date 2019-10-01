import React from "react";
import { Cell } from "./cell";

export function Subgrid(props) {
  return (
    <div className="fleColumn">
      <div className="flexRow">
        <Cell subgridNumber={props.subgridNumber} cellNumber={0} />
        <Cell subgridNumber={props.subgridNumber} cellNumber={1} />
      </div>
      <div className="flexRow">
        <Cell subgridNumber={props.subgridNumber} cellNumber={2} />
        <Cell subgridNumber={props.subgridNumber} cellNumber={3} />
      </div>
    </div>
  );
}
