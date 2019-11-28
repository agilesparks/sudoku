import { connect } from 'react-redux'
import { Cell } from './cell'

import {
    getCellRow,
    getCellCol,
    getSolutionFromGrid,
    isGiven
  } from "../utils/gridUtils";


const mapStateToProps = (state,props) => {
    const row = getCellRow(3, props.subgridNumber, props.cellNumber)
    const col = getCellCol(3, props.subgridNumber, props.cellNumber)
  return {
    row: row,
    col: col,
    possibleSolution: getSolutionFromGrid(state.possibleSolutions, row, col),
    grid: state.grid,
    isGiven: isGiven(state.grid, row, col),
    invalidityDetails: state.invalidityDetails,
    userSolution: getSolutionFromGrid(state.grid, row, col)
  }
}

 export const CellContainer = connect(
  mapStateToProps,
  null
)(Cell)