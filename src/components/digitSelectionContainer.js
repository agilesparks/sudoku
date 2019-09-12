import { connect } from 'react-redux'
import { DigitSelection } from './digitSelection'

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const mapStateToProps = (state) => {
  // console.log(props.subgridNumber+' '+props.cellNumber+' '+getCellRow(props.subgridNumber, props.cellNumber)+' '+getCellCol(props.subgridNumber, props.cellNumber))
   return {
     validity: state.validity
   }
 }

 export const DigitSelectionContainer = connect(
  mapStateToProps,
  null
)(DigitSelection)

