import React from "react";
import { Cell } from "./cell";
import { useSelector } from "react-redux";


function getOneSubgridRow(root, subgridNumber,subgridRow) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < root; subgridCol++) {
    let cellNumber = subgridRow * root + subgridCol
    myCols.push(<Cell subgridNumber={subgridNumber} key={cellNumber} cellNumber={cellNumber} />);
  }
  return <div className="flexRow" key={subgridNumber*root+subgridRow}>{myCols}</div>;
}

export function Subgrid(props) {
  
  const root = useSelector(state => state.root);
  let subgridRows = []
  for (let row = 0; row < root; row++)
    subgridRows.push(getOneSubgridRow(root,props.subgridNumber,row))
  
  return (
    
    <div className="fleColumn" style={{ border: '1px solid black' }}>
      {subgridRows}
    </div>
  );
}
