import React from "react";
import { Subgrid } from "./subgrid";
//import { useSelector } from "react-redux";

function getOneSubgridRow( subgridRow, dispatch,
  myStore) {
  let myCols = [];
  for (let subgridCol = 0; subgridCol < myStore.root; subgridCol++) {
    let ID = subgridRow * myStore.root + subgridCol
    myCols.push(<Subgrid key={ID} subgridNumber={ID}  dispatch = {dispatch}
      myStore = {myStore}/>);
  }
  return <div className="flexRow" key={subgridRow}>{myCols}</div>;
}

function getAllSubgridRows(myStore, dispatch) {
  let myRows = [];
  for (let subgridRow = 0; subgridRow < myStore.root; subgridRow++)
    myRows.push(getOneSubgridRow(subgridRow, dispatch,
      myStore ));
  return <div className="flexCol">{myRows}</div>;
}

export function Grid({myStore, dispatch}) { 
 // const root = useSelector(state => state.root);
  return (
    <div style={{ border: "1px solid black" }}>{getAllSubgridRows(myStore, dispatch)}</div>
  );
}
