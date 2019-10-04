import {
  getCleanGrid,
  getGridWithUpdatedSolution,
  getGridWithToggledInitial
} from "../utils/gridUtils";

const sudokuRoot = 3;

function getInitialState(root) {
  return {
    grid: getCleanGrid(root),
    isValid: true,
    root: root,
    games: []
  };
}

export default function rootReducer(state, action) {
  if (typeof state === "undefined") {
    return getInitialState(sudokuRoot);
  } else {
    let newState;
    switch (action.type) {
      case "RESET_STORE":
        return getInitialState(sudokuRoot);
      case "TOGGLE_INITIAL":
        newState = Object.assign({}, state);
        newState.grid = getGridWithToggledInitial(
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
        newState.invalidityReason = action.invalidityReason;
        return newState;
      default:
        return state;
    }
  }
}
