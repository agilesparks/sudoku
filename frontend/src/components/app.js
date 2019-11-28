import React from "react";
import Grid from "./grid";

export default function App() {
  return (
    <div>
      <div className="flexGrid" >
   {/*    <div className="flexColumn" >
          <BoardsManager />
        </div>
 */}        <div className="flexColumn" >
          <Grid />
        </div>
      </div>
    </div>
  );
}
