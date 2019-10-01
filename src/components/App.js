import React from "react";
import Grid from "./grid";
import { DigitSelection } from "./digitSelection";
import BoardsManager from "./boardsManager";

export default function App() {
  return (
    <div>
      <div className="flexRow">
        <div >
          <BoardsManager />
        </div>
        <div className="flexColumn">
          <Grid />
          <DigitSelection />
        </div>
      </div>
    </div>
  );
}
