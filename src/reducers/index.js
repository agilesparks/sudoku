import { isValid } from "./validityChecks";

const sudokuRoot = 3;

function getCleanInitialGrid() {
  const storeSudokuGrid = [];

  for (let row = 0; row < Math.pow(sudokuRoot, sudokuRoot); row++) {
    storeSudokuGrid[row] = [];
    for (let col = 0; col < Math.pow(sudokuRoot, sudokuRoot); col++) {
      storeSudokuGrid[row][col] = "1";
    }
  }
  return storeSudokuGrid;
}

const initialState = {
  grid: getCleanInitialGrid(),
  validity: true,
  root: sudokuRoot,
  games: []
};

export default function rootReducer(state, action) {
  if (typeof state === "undefined") {
    let newState = Object.assign({}, initialState);
    return newState;
  } else {
    let newState;
    switch (action.type) {
      case "RESET_STORE":
        const newInitialState = {
          grid: getCleanInitialGrid(),
          validity: true,
          root:sudokuRoot,
          games: []
        };
        return newInitialState;
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
