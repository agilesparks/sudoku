import { isValid } from "./validityChecks";

const sudokuRoot = 2;
const storeSudokuGrid = [];

for (let row = 0; row < Math.pow(sudokuRoot, 2); row++) {
  storeSudokuGrid[row] = [];
  for (let col = 0; col < Math.pow(sudokuRoot, 2); col++) {
    storeSudokuGrid[row][col] = "1";
  }
}

const initialState = {
  grid: storeSudokuGrid,
  validity: true,
  games: []
};

export default function rootReducer(state, action) {
  if (typeof state === "undefined") {
    let newState = Object.assign({}, initialState);
    return newState;
  } else {
    let newState
    switch (action.type) {
      case "ADD_DIGIT_TO_CELL":
        newState = Object.assign({}, state);
        newState.grid[action.cellRow][action.cellCol] = action.digit;
        return newState;
      case "UPDATE_CELL_DIGIT":
        newState = Object.assign({}, state);
        newState.grid[action.cellRow][action.cellCol] = action.digit;
        return newState;
      case "CHECK_VALIDITY":
        newState = Object.assign({}, state);
        newState.validity = isValid(newState.grid);
        return newState;
      case "GET_SAVED_GAMES_LIST":
        newState = Object.assign({}, state);
        newState.games = action.games;
        return newState;
      default:
        return state;
    }
  }
}
