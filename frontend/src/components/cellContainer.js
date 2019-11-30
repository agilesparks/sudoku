import { connect } from 'react-redux'
import { Cell } from './cell'

import {
  getCellRow,
  getCellCol,
  getSolutionFromGrid,
  isGiven,
  isValid
} from "../utils/gridUtils";


const mapStateToProps = (state, props) => {
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
)(Cell)