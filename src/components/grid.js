import React from "react";
import { Subgrid } from "./subgrid";
export default function Grid() {
  return (
    <div className="fleColumn">
          <div className="flexRow">
            <Subgrid subgridNumber={0} />
            <Subgrid subgridNumber={1} />
          </div>
          <div className="flexRow">
            <Subgrid subgridNumber={2} />
            <Subgrid subgridNumber={3} />
          </div>
    </div>
  );
}
