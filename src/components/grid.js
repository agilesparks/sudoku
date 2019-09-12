import React from "react";
import { Subgrid } from "./subgrid";
export default function Grid() {
  return (
    <div className="grid">
      <table align="center" className="grid">
        <tbody>
          <tr>
            <Subgrid subgridNumber={0} />
            <Subgrid subgridNumber={1} />
          </tr>
          <tr>
            <Subgrid subgridNumber={2} />
            <Subgrid subgridNumber={3} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
