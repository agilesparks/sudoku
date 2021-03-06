import {
  getCleanGrid,
  getGridWithUpdatedSolution,
  getGridWithToggledGiven
} from "../utils/gridUtils";



//const sudokuRoot = 3;

export function getInitialState(root) {
  return {
    grid: getCleanGrid(root),
    isValid: true,
    invalidityDetails: [],
    root: root,
    games: [],
    possibleSolutions: getCleanGrid(root)
  };
}

export default function rootReducer(state, action) {
  /*if (typeof state === "undefined") {
    return getInitialState(sudokuRoot);
  } else*/ {
    let newState;
    switch (action.type) {
      case "RESET_STORE":
        return getInitialState(action.root );
      case "TOGGLE_INITIAL":
        newState = Object.assign({}, state);
        newState.grid = getGridWithToggledGiven(
          state.grid,
          action.cellRow,
          action.cellCol
        );
        return newState;
      case "UPDATE_CELL_SOLUTION":
        newState = Object.assign({}, state);
        newState.grid = getGridWithUpdatedSolution(
          state.grid,
          action.cellRow,
          action.cellCol,
          action.solution
        );
        
        return newState;
      case "GET_SAVED_GAMES_LIST":
        newState = Object.assign({}, state);
        newState.games = action.games;
        return newState;
      case "SET_VALIDATION_RESULT":
        newState = Object.assign({}, state);
        newState.isValid = action.isValid;
        newState.invalidityDetails = action.invalidityDetails;
        return newState;
        case "SET_POSSIBLE_SOLUTIONS":
          newState = Object.assign({}, state);
        newState.possibleSolutions = action.possibleSolutions;
          return newState;
      default:
        return state;
    }
  }
}
