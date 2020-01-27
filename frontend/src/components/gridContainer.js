import { connect } from 'react-redux'
import {Grid} from './grid' 

const mapStateToProps = (state, props) => {
  return {
    root: state.root,
    possibleSolutions: state.possibleSolutions,
    invalidityDetails:state.invalidityDetails,
    grid: state.grid,
  }
}

export const GridContainer = connect(
  mapStateToProps,
  null
)(Grid)