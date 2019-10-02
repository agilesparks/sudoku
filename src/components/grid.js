import React from "react";
import { Subgrid } from "./subgrid";
import { useSelector } from "react-redux";

function getOneSubgridRow(root, subgridRow) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < root; subgridCol++) {
    let ID = subgridRow * root + subgridCol
    myCols.push(<Subgrid key={ID} subgridNumber={ID} />);
  }
  return <div className="flexRow" key={subgridRow}>{myCols}</div>;
}

function getAllSubgridRows(root) {
  let myRows = [];
  for (let subgridRow = 0; subgridRow < root; subgridRow++)
    myRows.push(getOneSubgridRow(root, subgridRow));
  return <div className="flexCol">{myRows}</div>;
}

export default function Grid() {
  const root = useSelector(state => state.root);
  return (
    <div style={{ border: "1px solid black" }}>{getAllSubgridRows(root)}</div>
  );
}
