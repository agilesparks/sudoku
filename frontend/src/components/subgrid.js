import React from "react";
import { CellContainer } from "./cellContainer";
//import { useSelector } from "react-redux";


function getOneSubgridRow(root, subgridNumber,subgridRow, dispatch, possibleSolutions,
  invalidityDetails, grid) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < root; subgridCol++) {
    let cellNumber = subgridRow * root + subgridCol
    myCols.push(<CellContainer subgridNumber={subgridNumber} key={cellNumber} cellNumber={cellNumber} dispatch = {dispatch}
      possibleSolutions = {possibleSolutions} invalidityDetails= {invalidityDetails} grid = {grid}/>);
  }
  return <div className="flexRow" key={subgridNumber*root+subgridRow}>{myCols}</div>;
}

export function Subgrid({subgridNumber, root, dispatch, possibleSolutions,
  invalidityDetails, grid}) {
  
 // const root = useSelector(state => state.root);
  let subgridRows = []
  for (let row = 0; row < root; row++)
    subgridRows.push(getOneSubgridRow(root,subgridNumber,row, dispatch, possibleSolutions,
      invalidityDetails, grid))
  
  return (
    
    <div className="flexColumn" style={{ border: '1px solid black' }}>
      {subgridRows}
    </div>
  );
}
