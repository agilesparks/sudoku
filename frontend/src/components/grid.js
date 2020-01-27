import React from "react";
import { Subgrid } from "./subgrid";
//import { useSelector } from "react-redux";

function getOneSubgridRow(root, subgridRow, dispatch,
  possibleSolutions, invalidityDetails, grid) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < root; subgridCol++) {
    let ID = subgridRow * root + subgridCol
    myCols.push(<Subgrid key={ID} subgridNumber={ID} root={root} dispatch = {dispatch}
      possibleSolutions = {possibleSolutions} invalidityDetails= {invalidityDetails} grid = {grid}/>);
  }
  return <div className="flexRow" key={subgridRow}>{myCols}</div>;
}

function getAllSubgridRows(root, possibleSolutions,
  invalidityDetails, grid, dispatch) {
  let myRows = [];
  for (let subgridRow = 0; subgridRow < root; subgridRow++)
    myRows.push(getOneSubgridRow(root, subgridRow, dispatch,
      possibleSolutions, invalidityDetails, grid ));
  return <div className="flexCol">{myRows}</div>;
}

export function Grid({root, possibleSolutions,
  invalidityDetails, grid, dispatch}) { 
 // const root = useSelector(state => state.root);
  return (
    <div style={{ border: "1px solid black" }}>{getAllSubgridRows(root, possibleSolutions,
      invalidityDetails, grid, dispatch)}</div>
  );
}
