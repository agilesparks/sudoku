import React from "react";
import { CellContainer } from "./cellContainer";
//import { useSelector } from "react-redux";


function getOneSubgridRow(subgridNumber,subgridRow, dispatch, myStore) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < myStore.root; subgridCol++) {
    let cellNumber = subgridRow * myStore.root + subgridCol
    myCols.push(<CellContainer subgridNumber={subgridNumber} key={cellNumber} cellNumber={cellNumber} dispatch = {dispatch}
      myStore = {myStore} />);
  }
  return <div className="flexRow" key={subgridNumber*myStore.root+subgridRow}>{myCols}</div>;
}

export function Subgrid({subgridNumber,  dispatch,myStore}) {
  
 // const root = useSelector(state => state.root);
  let subgridRows = []
  for (let row = 0; row < myStore.root; row++)
    subgridRows.push(getOneSubgridRow(subgridNumber,row, dispatch,myStore))
  
  return (
    
    <div className="flexColumn" style={{ border: '1px solid black' }}>
      {subgridRows}
    </div>
  );
}
