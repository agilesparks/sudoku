//import { connect } from 'react-redux'
import React from "react";
import { Cell } from './cell'

import {
  getCellRow,
  getCellCol,
  getSolutionFromGrid,
  isGiven,
  isValid
} from "../utils/gridUtils";


export function CellContainer({possibleSolutions,
  invalidityDetails, grid, dispatch,subgridNumber, cellNumber }) { 
    const row = getCellRow(3, subgridNumber, cellNumber)
    const col = getCellCol(3, subgridNumber, cellNumber)
 // const root = useSelector(state => state.root);
  return (
    <Cell dispatch = {dispatch}
    row = {row} col = {col}
    possibleSolution =  {getSolutionFromGrid(possibleSolutions, row, col)}
    isGiven = {isGiven(grid, row, col)}
    isValid = {isValid(invalidityDetails,row,col)}
    userSolution = {getSolutionFromGrid(grid, row, col)}
     />
  );
}

/*const mapStateToProps = (state, props) => {
  const row = getCellRow(3, props.subgridNumber, props.cellNumber)
  const col = getCellCol(3, props.subgridNumber, props.cellNumber)
  return {
    row: row,
    col: col,
    possibleSolution: getSolutionFromGrid(state.possibleSolutions, row, col),
    isGiven: isGiven(state.grid, row, col),
    // invalidityDetails: state.invalidityDetails,
    isValid: isValid(state.invalidityDetails,row,col),
    userSolution: getSolutionFromGrid(state.grid, row, col)
  }
}

export const CellContainer = connect(
  mapStateToProps,
  null
)(Cell)*/