import React from "react";
import Grid from "./grid";
import { ValidateButton } from "./validateButton";
import BoardsManager from "./boardsManager";

export default function App() {
  return (
    <div>
      <div className="flexGrid" >
   {/*    <div className="flexColumn" >
          <BoardsManager />
        </div>
 */}        <div className="flexColumn" >
          <Grid />
          <ValidateButton />
        </div>
      </div>
    </div>
  );
}
