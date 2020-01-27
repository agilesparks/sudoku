import React from "react";
import {GridContainer} from "./gridContainer";

export default function App() { 
  return (
    <div>
      <div className="flexGrid" >
   {/*    <div className="flexColumn" >
          <BoardsManager />
        </div>
 */}        <div className="flexColumn" >
          <GridContainer />
        </div>
      </div>
    </div>
  );
}
