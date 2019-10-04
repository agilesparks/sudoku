import React from "react";
import Grid from "./grid";
import { DigitSelection } from "./digitSelection";
import BoardsManager from "./boardsManager";

export default function App() {
  let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: 'yellow',
    border  : "1px solid black",
  };
  return (
    <div>
      <div className="flexGrid" >
      <div className="flexColumn" >
          <BoardsManager />
        </div>
        <div className="flexColumn" >
          <Grid />
          <DigitSelection />
        </div>
      </div>
    </div>
  );
}
