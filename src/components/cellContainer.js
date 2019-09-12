import { connect } from 'react-redux'
import { Cell } from './cell'


var getCellRow = function (subgridNumber, cellNumber) {
  return Math.floor(subgridNumber/2)*2 + Math.floor(cellNumber / 2)
}

var getCellCol = function (subgridNumber, cellNumber) {
  return (subgridNumber % 2)*2 + cellNumber % 2
}

const mapStateToProps = (state,props) => {
 // console.log(props.subgridNumber+' '+props.cellNumber+' '+getCellRow(props.subgridNumber, props.cellNumber)+' '+getCellCol(props.subgridNumber, props.cellNumber))
  return {
    
    digit: state.grid[getCellRow(props.subgridNumber, props.cellNumber)]
    [getCellCol(props.subgridNumber, props.cellNumber)],
    row: getCellRow(props.subgridNumber, props.cellNumber),
    col: getCellCol(props.subgridNumber, props.cellNumber)
  }
}

 export const CellContainer = connect(
  mapStateToProps,
  null
)(Cell)

